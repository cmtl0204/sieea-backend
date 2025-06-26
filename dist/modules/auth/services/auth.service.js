"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const jwt_1 = require("@nestjs/jwt");
const Bcrypt = require("bcrypt");
const class_transformer_1 = require("class-transformer");
const typeorm_1 = require("typeorm");
const date_fns_1 = require("date-fns");
const enums_1 = require("../../../shared/enums");
const dto_1 = require("../dto");
const mail_service_1 = require("../../common/mail/mail.service");
const _config_1 = require("../../../config");
const users_service_1 = require("./users.service");
const axios_2 = require("axios");
const rxjs_1 = require("rxjs");
let AuthService = class AuthService {
    repository;
    transactionalCodeRepository;
    repositoryAdditionalInformation;
    configService;
    userService;
    jwtService;
    nodemailerService;
    httpService;
    MAX_ATTEMPTS = 3;
    constructor(repository, transactionalCodeRepository, repositoryAdditionalInformation, configService, userService, jwtService, nodemailerService, httpService) {
        this.repository = repository;
        this.transactionalCodeRepository = transactionalCodeRepository;
        this.repositoryAdditionalInformation = repositoryAdditionalInformation;
        this.configService = configService;
        this.userService = userService;
        this.jwtService = jwtService;
        this.nodemailerService = nodemailerService;
        this.httpService = httpService;
    }
    async changePassword(id, payload) {
        const user = await this.repository.findOne({
            select: {
                id: true,
                identification: true,
                lastname: true,
                name: true,
                maxAttempts: true,
                password: true,
                suspendedAt: true,
                username: true,
            },
            where: { id },
        });
        if (!user) {
            throw new common_1.NotFoundException('Usuario no encontrado para cambio de contraseña');
        }
        const isMatchPassword = await this.checkPassword(payload.passwordOld, user, false);
        if (!isMatchPassword) {
            throw new common_1.BadRequestException('La contraseña anterior no coincide.');
        }
        if (payload.passwordConfirmation !== payload.passwordNew) {
            throw new common_1.BadRequestException('Las contraseñas no coinciden.');
        }
        await this.repository.update(user.id, {
            password: Bcrypt.hashSync(payload.passwordNew, 10),
        });
        return true;
    }
    async signIn(payload) {
        const user = await this.repository.findOne({
            select: {
                id: true,
                identification: true,
                lastname: true,
                name: true,
                maxAttempts: true,
                password: true,
                suspendedAt: true,
                username: true,
            },
            where: {
                username: payload.username,
            },
            relations: {
                roles: true,
            },
        });
        if (!user) {
            throw new common_1.UnauthorizedException({
                error: 'Sin Autorización',
                message: 'Usuario y/o contraseña no válidos',
            });
        }
        if (user?.suspendedAt)
            throw new common_1.UnauthorizedException({
                error: 'Cuenta Suspendida',
                message: 'Su usuario se encuentra suspendido',
            });
        if (payload.username.includes('@turismo.gob.ec')) {
            if (!(await this.signInLDAP(payload)))
                throw new common_1.UnauthorizedException({
                    error: 'Sin Autorización',
                    message: 'Usuario y/o contraseña no válidos',
                });
        }
        if (!payload.username.includes('@turismo.gob.ec')) {
            if (user?.maxAttempts === 0)
                throw new common_1.UnauthorizedException({
                    error: 'Sin Autorización',
                    message: 'Ha excedido el número máximo de intentos permitidos',
                });
            if (!(await this.checkPassword(payload.password, user))) {
                throw new common_1.UnauthorizedException(`Usuario y/o contraseña no válidos, ${user.maxAttempts - 1} intentos restantes`);
            }
        }
        const { password, suspendedAt, maxAttempts, roles, ...userRest } = user;
        await this.repository.update(user.id, { activatedAt: new Date() });
        return {
            data: {
                accessToken: await this.generateJwt(user),
                auth: userRest,
                roles,
            },
        };
    }
    async signInLDAP(payload) {
        const url = `${this.configService.urlLDAP}/${payload.username.split('@')[0]}/${payload.password}`;
        const response = await (0, rxjs_1.lastValueFrom)(this.httpService.get(url));
        return response.data.data;
    }
    async findProfile(id) {
        const user = await this.repository.findOne({
            select: {
                id: true,
                identification: true,
                lastname: true,
                name: true,
                maxAttempts: true,
                password: true,
                suspendedAt: true,
                username: true,
            },
            where: {
                id,
            },
            relations: {
                roles: true,
                identificationType: true,
            },
        });
        if (!user) {
            throw new common_1.NotFoundException('El perfil no existe');
        }
        return {
            data: {
                user: user,
            },
        };
    }
    async findUserInformation(id) {
        const user = await this.repository.findOneBy({ id });
        if (!user) {
            throw new common_1.NotFoundException('Información de usuario no existe');
        }
        return (0, class_transformer_1.plainToInstance)(dto_1.ReadUserInformationDto, user);
    }
    async updateUserInformation(id, payload) {
        const user = await this.userService.findOne(id);
        if (!user) {
            throw new common_1.NotFoundException('Usuario no encontrado para actualizar información');
        }
        this.repository.merge(user, payload);
        const userUpdated = await this.repository.save(user);
        return (0, class_transformer_1.plainToInstance)(dto_1.ReadUserInformationDto, userUpdated);
    }
    async updateProfile(id, payload) {
        const user = await this.repository.findOneBy({ id });
        if (!user) {
            throw new common_1.NotFoundException('Usuario no encontrado para actualizar el perfil');
        }
        const profileUpdated = await this.repository.update(id, payload);
        return (0, class_transformer_1.plainToInstance)(dto_1.ReadProfileDto, profileUpdated);
    }
    refreshToken(user) {
        const accessToken = this.generateJwt(user);
        return { data: { accessToken, user } };
    }
    async requestTransactionalCode(username) {
        const user = await this.repository.findOne({
            where: { username },
        });
        if (!user) {
            throw new common_1.NotFoundException({
                error: 'Usuario no encontrado para generar código transaccional',
                message: 'Intente de nuevo',
            });
        }
        const randomNumber = Math.random();
        const token = randomNumber.toString().substring(2, 8);
        const mailData = {
            to: user.email || user.personalEmail,
            subject: enums_1.MailSubjectEnum.RESET_PASSWORD,
            template: enums_1.MailTemplateEnum.TRANSACTIONAL_CODE,
            data: {
                token,
                user,
            },
        };
        await this.nodemailerService.sendMail(mailData);
        const payload = { username: user.username, token, type: 'password_reset' };
        await this.transactionalCodeRepository.save(payload);
        const value = user.email || user.personalEmail;
        const chars = 3;
        const email = value.replace(/[a-z0-9\-_.]+@/gi, (c) => c.substr(0, chars) +
            c
                .split('')
                .slice(chars, -1)
                .map((v) => '*')
                .join('') +
            '@');
        return { data: email };
    }
    async requestTransactionalEmailCode(user, email) {
        const randomNumber = Math.random();
        const token = randomNumber.toString().substring(2, 8);
        const mailData = {
            to: email,
            subject: enums_1.MailSubjectEnum.RESET_EMAIL,
            template: enums_1.MailTemplateEnum.TRANSACTIONAL_EMAIL_CODE,
            data: {
                token,
                user,
            },
        };
        await this.nodemailerService.sendMail(mailData);
        const payload = { username: email, token, type: 'email_reset' };
        await this.transactionalCodeRepository.save(payload);
        const value = email;
        const chars = 3;
        const emailMask = value.replace(/[a-z0-9\-_.]+@/gi, (c) => c.substr(0, chars) +
            c
                .split('')
                .slice(chars, -1)
                .map((v) => '*')
                .join('') +
            '@');
        return { data: emailMask };
    }
    async verifyTransactionalCode(token, username) {
        const transactionalCode = await this.transactionalCodeRepository.findOne({
            where: { token },
        });
        if (!transactionalCode) {
            throw new common_1.BadRequestException({
                message: 'Código Transaccional no válido',
                error: 'Error',
            });
        }
        if (transactionalCode.username !== username) {
            throw new common_1.BadRequestException({
                message: 'El usuario no corresponde al código transaccional generado',
                error: 'Error',
            });
        }
        if (transactionalCode.isUsed) {
            throw new common_1.BadRequestException({
                message: 'El código ya fue usado',
                error: 'Error',
            });
        }
        const maxDate = (0, date_fns_1.add)(transactionalCode.createdAt, { minutes: 10 });
        if ((0, date_fns_1.isBefore)(maxDate, new Date())) {
            throw new common_1.BadRequestException({
                message: 'El código ha expirado',
                error: 'Error',
            });
        }
        transactionalCode.isUsed = true;
        await this.transactionalCodeRepository.save(transactionalCode);
        return { data: true };
    }
    async resetPassword(payload) {
        const user = await this.repository.findOne({
            where: { username: payload.username },
        });
        if (!user) {
            throw new common_1.NotFoundException({
                message: 'Intente de nuevo',
                error: 'Usuario no encontrado para resetear contraseña',
            });
        }
        await this.repository.update(user.id, {
            maxAttempts: this.MAX_ATTEMPTS,
            password: Bcrypt.hashSync(payload.passwordNew, 10),
            passwordChanged: true,
        });
        return { data: true };
    }
    async uploadAvatar(file, id) {
        const entity = await this.repository.findOne({
            select: {
                id: true,
                avatar: true,
            },
            where: { id: id },
        });
        if (entity?.avatar)
            entity.avatar = `avatars/${file.filename}`;
        return await this.repository.save({ ...entity });
    }
    async generateJwt(user) {
        const expiresDate = new Date();
        expiresDate.setDate(expiresDate.getSeconds() + 10);
        const payload = { id: user.id, username: user.username };
        return await this.jwtService.signAsync(payload);
    }
    async findByUsername(username) {
        return (await this.repository.findOne({
            where: {
                username,
            },
        }));
    }
    async checkPassword(passwordCompare, user, reduceAttempts = true) {
        const { password, ...userRest } = user;
        const isMatch = Bcrypt.compareSync(passwordCompare, password);
        if (isMatch) {
            await this.repository.update(user.id, { maxAttempts: this.MAX_ATTEMPTS });
            return true;
        }
        if (reduceAttempts) {
            await this.repository.update(userRest.id, {
                maxAttempts: userRest.maxAttempts > 0 ? userRest.maxAttempts - 1 : 0,
            });
        }
        return false;
    }
    async verifyRecaptcha(token) {
        const response = await axios_2.default.post(`https://www.google.com/recaptcha/api/siteverify?secret=${this.configService.recaptchaSiteSecret}&response=${token}`);
        return {
            success: response.data.success,
            score: response.data.score,
        };
    }
    async verifyIdentification2(identification) {
        const user = await this.repository.findOneBy({ username: identification });
        if (!user) {
            throw new common_1.NotFoundException({
                message: 'Su número de cédula no se encuentra registrado en nuestro sistema',
                error: 'Cédula no encontrado',
            });
        }
        const url = `http://192.168.20.22:8080/servicio-rest-dinardap-v2-1/rest/dinardap/registro-civil/${identification}`;
        const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url, {
            headers: {
                'Content-Type': 'application/json',
            },
        }));
        return data;
    }
    async verifyIdentification(identification) {
        const additionalInformation = await this.repositoryAdditionalInformation.findOne({
            where: { cedula: identification },
            select: {
                cedula: true,
                fechaEmision: true,
                fechaExpiracion: true,
                nombres: true,
            },
        });
        if (!additionalInformation) {
            throw new common_1.NotFoundException({
                message: 'Su número de cédula no se encuentra registrado en nuestro sistema',
                error: 'Cédula no encontrado',
            });
        }
        return { data: additionalInformation };
    }
    async signInByValidationIdentification(username) {
        const user = await this.repository.findOne({
            select: {
                id: true,
                identification: true,
                lastname: true,
                name: true,
                suspendedAt: true,
                username: true,
                termsConditions: true,
            },
            where: {
                username,
            },
            relations: {
                roles: true,
                additionalInformation: true,
            },
        });
        if (!user) {
            throw new common_1.NotFoundException({
                message: 'Su número de cédula no se encuentra registrado en nuestro sistema',
                error: 'Cédula no encontrado',
            });
        }
        if (user?.suspendedAt)
            throw new common_1.UnauthorizedException({
                error: 'Cuenta Suspendida',
                message: 'Su usuario se encuentra suspendido',
            });
        const { suspendedAt, additionalInformation, roles, ...userRest } = user;
        await this.repository.update(user.id, { activatedAt: new Date() });
        return {
            data: {
                accessToken: await this.generateJwt(user),
                auth: userRest,
                roles,
                additionalInformation,
            },
        };
    }
    async migrateEEA() {
        const additionalInformations = await this.repositoryAdditionalInformation.find({ take: 10 });
        for (const item of additionalInformations) {
            let user = await this.repository.findOneBy({
                identification: item.cedula,
            });
            if (!user) {
                user = this.repository.create();
                user.username = item.cedula;
                user.identification = item.cedula;
                user.email = item.correo;
                user.name = item.nombres;
                user.password = item.cedula;
                const userCreated = await this.repository.save(user);
                item.userId = userCreated.id;
                await this.repositoryAdditionalInformation.save(item);
            }
        }
        return { data: null };
    }
    async consultaRegistroCivil() {
        let cedulaError = '';
        const additionalInformations = await this.repositoryAdditionalInformation.find({
            where: { fechaEmision: (0, typeorm_1.IsNull)() },
            take: 500,
        });
        let i = 0;
        for (const item of additionalInformations) {
            cedulaError = item.cedula;
            const url = `http://192.168.20.22:8080/servicio-rest-dinardap-v2-1/rest/dinardap/registro-civil/${item.cedula}`;
            const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url, {
                headers: {
                    'Content-Type': 'application/json',
                },
            }));
            await new Promise((resolve) => setTimeout(resolve, 1500));
            if (data && data.data && (!item.fechaExpiracion || !item.fechaEmision)) {
                item.fechaEmision = data.data.fechaExpedicion;
                item.fechaExpiracion = data.data.fechaExpiracion;
                await this.repositoryAdditionalInformation.save(item);
            }
        }
        return { data: null };
    }
    async acceptTermsConditions(user) {
        user.termsConditions = true;
        const mailData = {
            to: user.email,
            subject: enums_1.MailSubjectEnum.ACCEPT_TERMS_CONDITIONS,
            template: enums_1.MailTemplateEnum.ACCEPT_TERMS_CONDITIONS,
            data: {
                user,
            },
        };
        await this.nodemailerService.sendMail(mailData);
        return await this.repository.save(user);
    }
    async rejectTermsConditions(user) {
        user.termsConditions = false;
        return await this.repository.save(user);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(enums_1.AuthRepositoryEnum.USER_REPOSITORY)),
    __param(1, (0, common_1.Inject)(enums_1.AuthRepositoryEnum.TRANSACTIONAL_CODE_REPOSITORY)),
    __param(2, (0, common_1.Inject)(enums_1.AuthRepositoryEnum.ADDITIONAL_INFORMATION_REPOSITORY)),
    __param(3, (0, common_1.Inject)(_config_1.config.KEY)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository, void 0, users_service_1.UsersService,
        jwt_1.JwtService,
        mail_service_1.MailService,
        axios_1.HttpService])
], AuthService);
//# sourceMappingURL=auth.service.js.map