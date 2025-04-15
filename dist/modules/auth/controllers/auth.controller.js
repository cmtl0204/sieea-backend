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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const decorators_1 = require("../decorators");
const services_1 = require("../services");
const entities_1 = require("../entities");
const dto_1 = require("../dto");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const path_1 = require("path");
const helpers_1 = require("../../../shared/helpers");
let AuthController = class AuthController {
    authService;
    constructor(authService) {
        this.authService = authService;
    }
    async signIn(payload) {
        const serviceResponse = await this.authService.signIn(payload);
        return {
            data: serviceResponse.data,
            message: 'Correct Access',
            title: 'Welcome',
        };
    }
    async changePassword(id, payload) {
        const serviceResponse = await this.authService.changePassword(id, payload);
        return {
            data: serviceResponse,
            message: 'La contraseña fue cambiada',
            title: 'Contraseña Actualizada',
        };
    }
    async findProfile(user) {
        const serviceResponse = await this.authService.findProfile(user.id);
        return {
            data: serviceResponse,
            message: `profile`,
            title: `Success`,
        };
    }
    async findUserInformation(user) {
        const serviceResponse = await this.authService.findUserInformation(user.id);
        return {
            data: serviceResponse,
            message: 'La información del usuario fue actualizada',
            title: 'Atualizado',
        };
    }
    async updateProfile(user, payload) {
        const serviceResponse = await this.authService.updateProfile(user.id, payload);
        return {
            data: serviceResponse,
            message: 'El perfil fue actualizado',
            title: 'Actualizado',
        };
    }
    async updateUserInformation(id, payload) {
        const serviceResponse = await this.authService.updateUserInformation(id, payload);
        return {
            data: serviceResponse,
            message: 'La inforación del usuario fue actualizada',
            title: 'Actualuizado',
        };
    }
    refreshToken(user) {
        const serviceResponse = this.authService.refreshToken(user);
        return {
            data: serviceResponse.data,
            message: 'Correct Access',
            title: 'Refresh Token',
        };
    }
    async requestTransactionalCode(username) {
        const serviceResponse = await this.authService.requestTransactionalCode(username);
        return {
            data: serviceResponse.data,
            message: `Su código fue enviado a ${serviceResponse.data}`,
            title: 'Código Enviado',
        };
    }
    async requestTransactionalCodeEmail(user, email) {
        const serviceResponse = await this.authService.requestTransactionalEmailCode(user, email);
        return {
            data: serviceResponse.data,
            message: `Su código fue enviado a ${email}`,
            title: 'Código Enviado',
        };
    }
    async verifyTransactionalCode(token, username) {
        await this.authService.verifyTransactionalCode(token, username);
        return {
            data: null,
            message: `Proceda con su trámite`,
            title: 'Código Válido',
        };
    }
    async resetPassword(payload) {
        await this.authService.resetPassword(payload);
        return {
            data: null,
            message: `Por favor inicie sesión`,
            title: 'Contraseña Reseteada',
        };
    }
    async uploadAvatar(avatar, id) {
        const response = await this.authService.uploadAvatar(avatar, id);
        return {
            data: response,
            message: 'Imagen Subida Correctamente',
            title: 'Imagen Subida',
        };
    }
    async verifyRecaptcha(token) {
        const response = await this.authService.verifyRecaptcha(token);
        return {
            data: response,
            message: ``,
            title: '',
        };
    }
    async verifyIdentification(identification) {
        const response = await this.authService.verifyIdentification(identification);
        return {
            data: response.data,
            message: `Ingrese la validación correspondiente`,
            title: 'Documento válido',
        };
    }
    async signInByValidationIdentification(identification) {
        const serviceResponse = await this.authService.signInByValidationIdentification(identification);
        return {
            data: serviceResponse.data,
            message: `Ingreso Correcto`,
            title: 'Bienvenido',
        };
    }
    async migrateEEA() {
        const serviceResponse = await this.authService.migrateEEA();
        return {
            data: serviceResponse.data,
            message: `Ingreso Correcto`,
            title: 'Bienvenido',
        };
    }
    async consultaRegistroCivil() {
        const serviceResponse = await this.authService.consultaRegistroCivil();
        return {
            data: serviceResponse.data,
            message: `Cedulas actualizadas`,
            title: 'Correcto',
        };
    }
    async acceptTermsConditions(user) {
        const serviceResponse = await this.authService.acceptTermsConditions(user);
        return {
            data: serviceResponse,
            message: `Usted ha aceptado`,
            title: 'Términos y Condiciones',
        };
    }
    async rejectTermsConditions(user) {
        const serviceResponse = await this.authService.rejectTermsConditions(user);
        return {
            data: serviceResponse,
            message: `Usted ha rechazado`,
            title: 'Términos y Condiciones',
        };
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Sign In' }),
    (0, decorators_1.PublicRoute)(),
    (0, common_1.Post)('sign-in'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.LoginDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signIn", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Change Password' }),
    (0, common_1.Put)(':id/change-password'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.PasswordChangeDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "changePassword", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Find Profile' }),
    (0, common_1.Get)('profile'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, decorators_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [entities_1.UserEntity]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "findProfile", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Find User Information' }),
    (0, common_1.Get)('user-information'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, decorators_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [entities_1.UserEntity]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "findUserInformation", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update Profile' }),
    (0, common_1.Put)('profile'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, decorators_1.User)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [entities_1.UserEntity,
        dto_1.UpdateProfileDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "updateProfile", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update User Information' }),
    (0, common_1.Put)('user-information'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, decorators_1.User)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.UpdateUserInformationDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "updateUserInformation", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Refresh Token' }),
    (0, decorators_1.Auth)(),
    (0, common_1.Get)('refresh-token'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, decorators_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [entities_1.UserEntity]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "refreshToken", null);
__decorate([
    (0, decorators_1.PublicRoute)(),
    (0, common_1.Get)('transactional-codes/:username/request'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "requestTransactionalCode", null);
__decorate([
    (0, common_1.Get)('transactional-email-codes/:email/request'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, decorators_1.User)()),
    __param(1, (0, common_1.Param)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [entities_1.UserEntity, String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "requestTransactionalCodeEmail", null);
__decorate([
    (0, decorators_1.PublicRoute)(),
    (0, common_1.Patch)('transactional-codes/:token/verify'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('token')),
    __param(1, (0, common_1.Body)('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "verifyTransactionalCode", null);
__decorate([
    (0, decorators_1.PublicRoute)(),
    (0, common_1.Patch)('reset-passwords'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "resetPassword", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Upload Avatar' }),
    (0, common_1.Post)(':id/avatar'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('avatar', {
        storage: (0, multer_1.diskStorage)({
            destination: (0, path_1.join)(process.cwd(), 'assets/avatars'),
            filename: helpers_1.getFileName,
        }),
        fileFilter: helpers_1.imageFilter,
        limits: { fieldSize: 1 },
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "uploadAvatar", null);
__decorate([
    (0, decorators_1.PublicRoute)(),
    (0, common_1.Post)('verify-recaptcha'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Query)('token')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "verifyRecaptcha", null);
__decorate([
    (0, decorators_1.PublicRoute)(),
    (0, common_1.Get)('verify-identification/:identification'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('identification')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "verifyIdentification", null);
__decorate([
    (0, decorators_1.PublicRoute)(),
    (0, common_1.Get)('sign-in-validation-identification/:identification'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('identification')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signInByValidationIdentification", null);
__decorate([
    (0, decorators_1.PublicRoute)(),
    (0, common_1.Get)('migration-eea'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "migrateEEA", null);
__decorate([
    (0, decorators_1.PublicRoute)(),
    (0, common_1.Get)('consulta-registro-civil'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "consultaRegistroCivil", null);
__decorate([
    (0, common_1.Patch)('terms-conditions/accept'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, decorators_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [entities_1.UserEntity]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "acceptTermsConditions", null);
__decorate([
    (0, common_1.Patch)('terms-conditions/reject'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, decorators_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [entities_1.UserEntity]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "rejectTermsConditions", null);
exports.AuthController = AuthController = __decorate([
    (0, decorators_1.Auth)(),
    (0, swagger_1.ApiTags)('Auth'),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [services_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map