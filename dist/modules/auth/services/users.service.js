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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const typeorm_1 = require("typeorm");
const dto_1 = require("../dto");
const constants_1 = require("../constants");
const dto_2 = require("../../../shared/dto");
const enums_1 = require("../../../shared/enums");
let UsersService = class UsersService {
    repository;
    addressRepository;
    additionalInformationRepository;
    constructor(repository, addressRepository, additionalInformationRepository) {
        this.repository = repository;
        this.addressRepository = addressRepository;
        this.additionalInformationRepository = additionalInformationRepository;
    }
    async create(payload) {
        const newUser = this.repository.create(payload);
        const userCreated = await this.repository.save(newUser);
        return await this.repository.save(newUser);
    }
    async catalogue() {
        const response = await this.repository.findAndCount({ take: 1000 });
        return {
            data: response[0],
            pagination: { totalItems: response[1], limit: 10 },
        };
    }
    async findAll(params) {
        const relations = { roles: true };
        if (params && params?.limit > 0 && params?.page >= 0) {
            return await this.paginateAndFilter(params, relations);
        }
        if (params?.birthdate) {
            return this.filterByBirthdate(params.birthdate);
        }
        const response = await this.repository.findAndCount({
            relations,
            order: { updatedAt: 'DESC' },
        });
        return {
            data: response[0],
            pagination: { totalItems: response[1], limit: 10 },
        };
    }
    async findOne(id) {
        const user = await this.repository.findOne({
            where: { id },
            relations: {
                roles: true,
                identificationType: true,
            },
            select: { password: false },
        });
        if (!user) {
            throw new common_1.NotFoundException('Usuario no encontrado (find one)');
        }
        return user;
    }
    async findPersonalInformation(id) {
        const user = await this.repository.findOne({
            where: { id },
            select: {
                id: true,
            },
            relations: {
                additionalInformation: true,
            },
        });
        if (!user) {
            throw new common_1.NotFoundException('Usuario no encontrado (find persona information)');
        }
        return user;
    }
    async findBankDetail(id) {
        const user = await this.repository.findOne({
            where: { id },
            select: {
                id: true,
            },
            relations: {
                additionalInformation: true,
            },
        });
        if (!user) {
            throw new common_1.NotFoundException('Usuario no encontrado (find persona information)');
        }
        return user;
    }
    async findByUsername(username) {
        const user = await this.repository.findOne({
            where: { username },
            select: { password: false },
        });
        if (!user) {
            throw new common_1.NotFoundException('Nombre de usuario no existe');
        }
        return user;
    }
    async update(id, payload) {
        const user = await this.repository.findOne({
            relations: { roles: true },
            where: { id },
        });
        if (!user) {
            throw new common_1.NotFoundException('Usuario no encontrado para actualizar');
        }
        this.repository.merge(user, payload);
        user.roles = payload.roles;
        return await this.repository.save(user);
    }
    async reactivate(id) {
        const user = await this.findOne(id);
        if (!user) {
            throw new common_1.NotFoundException('Usuario no encontrado para reactivar');
        }
        user.suspendedAt = null;
        user.maxAttempts = constants_1.MAX_ATTEMPTS;
        const userUpdated = await this.repository.save(user);
        return (0, class_transformer_1.plainToInstance)(dto_1.ReadUserDto, userUpdated);
    }
    async remove(id) {
        const user = await this.repository.findOneBy({ id });
        if (!user) {
            throw new common_1.NotFoundException('Usuario no encontrado para eliminar');
        }
        const userDeleted = await this.repository.softRemove(user);
        return (0, class_transformer_1.plainToInstance)(dto_1.ReadUserDto, userDeleted);
    }
    async removeAll(payload) {
        const usersDeleted = await this.repository.softRemove(payload);
        return usersDeleted[0];
    }
    async paginateAndFilter(params, relations) {
        let where;
        where = {};
        let { page, search } = params;
        const { limit } = params;
        if (search) {
            search = search.trim();
            page = 0;
            where = [];
            where.push({ identification: (0, typeorm_1.ILike)(`%${search}%`) });
            where.push({ lastname: (0, typeorm_1.ILike)(`%${search}%`) });
            where.push({ name: (0, typeorm_1.ILike)(`%${search}%`) });
            where.push({ username: (0, typeorm_1.ILike)(`%${search}%`) });
            where.push({ roles: { name: (0, typeorm_1.ILike)(`%${search}%`) } });
        }
        const response = await this.repository.findAndCount({
            where,
            relations,
            take: limit,
            skip: dto_2.PaginationDto.getOffset(limit, page),
            order: {
                updatedAt: 'DESC',
            },
        });
        return {
            data: (0, class_transformer_1.plainToInstance)(dto_1.ReadUserDto, response[0]),
            pagination: { limit, totalItems: response[1] },
        };
    }
    async filterByBirthdate(birthdate) {
        const where = {};
        if (birthdate) {
            where.birthdate = (0, typeorm_1.LessThan)(birthdate);
        }
        const response = await this.repository.findAndCount({ where });
        return {
            data: (0, class_transformer_1.plainToInstance)(dto_1.ReadUserDto, response[0]),
            pagination: { limit: 10, totalItems: response[1] },
        };
    }
    async suspend(id) {
        const user = await this.findOne(id);
        if (!user) {
            throw new common_1.NotFoundException('Usuario no encontrado para suspender');
        }
        user.suspendedAt = new Date();
        const userUpdated = await this.repository.save(user);
        return (0, class_transformer_1.plainToInstance)(dto_1.ReadUserDto, userUpdated);
    }
    async updatePersonalInformation(id, payload) {
        const user = await this.repository.findOne({
            where: { id },
            relations: { additionalInformation: true },
        });
        if (!user) {
            throw new common_1.NotFoundException('Usuario no encontrado para actualizar');
        }
        let additionalInformation = user.additionalInformation;
        if (!additionalInformation) {
            additionalInformation = this.additionalInformationRepository.create();
            additionalInformation.userId = id;
        }
        user.email = payload.additionalInformation.correo;
        additionalInformation.correo = payload.additionalInformation.correo;
        await this.repository.save(user);
        await this.additionalInformationRepository.save(additionalInformation);
        return user;
    }
    async updateBankDetail(id, payload) {
        const user = await this.repository.findOne({
            where: { id },
            relations: { additionalInformation: true },
        });
        if (!user) {
            throw new common_1.NotFoundException('Usuario no encontrado para actualizar');
        }
        let additionalInformation = user.additionalInformation;
        if (!additionalInformation) {
            additionalInformation = this.additionalInformationRepository.create();
            additionalInformation.userId = id;
        }
        additionalInformation.cambioCuenta = true;
        additionalInformation.numeroCuenta =
            payload.additionalInformation.numeroCuenta;
        additionalInformation.nombreCorto =
            payload.additionalInformation.nombreCorto;
        additionalInformation.tipoCuenta = payload.additionalInformation.tipoCuenta;
        await this.additionalInformationRepository.save(additionalInformation);
        return user;
    }
    async updateEmail(id, payload) {
        const user = await this.repository.findOne({
            where: { id },
            relations: { additionalInformation: true },
        });
        if (!user) {
            throw new common_1.NotFoundException('Usuario no encontrado para actualizar');
        }
        let additionalInformation = user.additionalInformation;
        if (!additionalInformation) {
            additionalInformation = this.additionalInformationRepository.create();
            additionalInformation.userId = id;
        }
        user.email = payload.email;
        additionalInformation.correo = payload.email;
        additionalInformation.fechaActualizacionCorreo = new Date();
        await this.repository.save(user);
        await this.additionalInformationRepository.save(additionalInformation);
        return user;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(enums_1.AuthRepositoryEnum.USER_REPOSITORY)),
    __param(1, (0, common_1.Inject)(enums_1.AuthRepositoryEnum.ADDRESS_REPOSITORY)),
    __param(2, (0, common_1.Inject)(enums_1.AuthRepositoryEnum.ADDITIONAL_INFORMATION_REPOSITORY)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository])
], UsersService);
//# sourceMappingURL=users.service.js.map