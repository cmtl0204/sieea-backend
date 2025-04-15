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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const dto_1 = require("../dto");
const decorators_1 = require("../decorators");
const users_service_1 = require("../services/users.service");
let UsersController = class UsersController {
    usersService;
    constructor(usersService) {
        this.usersService = usersService;
    }
    async create(payload) {
        const serviceResponse = await this.usersService.create(payload);
        return {
            data: serviceResponse,
            message: 'User created',
            title: 'Created',
        };
    }
    async catalogue() {
        const serviceResponse = await this.usersService.catalogue();
        return {
            data: serviceResponse.data,
            pagination: serviceResponse.pagination,
            message: `catalogue`,
            title: `Catalogue`,
        };
    }
    async findAll(params) {
        const serviceResponse = await this.usersService.findAll(params);
        return {
            data: serviceResponse.data,
            pagination: serviceResponse.pagination,
            message: `index`,
            title: 'Success',
        };
    }
    async findOne(id) {
        const serviceResponse = await this.usersService.findOne(id);
        return {
            data: serviceResponse,
            message: `show ${id}`,
            title: `Success`,
        };
    }
    async update(id, payload) {
        const serviceResponse = await this.usersService.update(id, payload);
        return {
            data: serviceResponse,
            message: `Usuario actualizado`,
            title: `Actualizado`,
        };
    }
    async reactivate(id) {
        const serviceResponse = await this.usersService.reactivate(id);
        return {
            data: serviceResponse,
            message: `Usuario reactivado`,
            title: `Reactivado`,
        };
    }
    async remove(id) {
        const serviceResponse = await this.usersService.remove(id);
        return {
            data: serviceResponse,
            message: `Usuario eliminado`,
            title: `Eliminado`,
        };
    }
    async removeAll(payload) {
        const serviceResponse = await this.usersService.removeAll(payload);
        return {
            data: serviceResponse,
            message: `Users deleted`,
            title: `Deleted`,
        };
    }
    async suspend(id) {
        const serviceResponse = await this.usersService.suspend(id);
        return {
            data: serviceResponse,
            message: `Usuario suspendido`,
            title: `Suspendido`,
        };
    }
    async findPersonalInformation(id) {
        const serviceResponse = await this.usersService.findPersonalInformation(id);
        return {
            data: serviceResponse,
            message: `show ${id}`,
            title: `Success`,
        };
    }
    async findBankDetail(id) {
        const serviceResponse = await this.usersService.findBankDetail(id);
        return {
            data: serviceResponse,
            message: `show ${id}`,
            title: `Success`,
        };
    }
    async updatePersonalInformation(id, payload) {
        const serviceResponse = await this.usersService.updatePersonalInformation(id, payload);
        return {
            data: serviceResponse,
            message: `Información Actualizada Correctamente`,
            title: `Actualizado`,
        };
    }
    async updateBankDetail(id, payload) {
        const serviceResponse = await this.usersService.updateBankDetail(id, payload);
        return {
            data: serviceResponse,
            message: `Información Actualizada Correctamente`,
            title: `Actualizado`,
        };
    }
    async updateEmail(id, payload) {
        const serviceResponse = await this.usersService.updateEmail(id, payload);
        return {
            data: serviceResponse,
            message: `Información Actualizada Correctamente`,
            title: `Actualizado`,
        };
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create One' }),
    (0, decorators_1.PublicRoute)(),
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Catalogue' }),
    (0, common_1.Get)('catalogue'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "catalogue", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Find All' }),
    (0, decorators_1.PublicRoute)(),
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.FilterUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Find One' }),
    (0, decorators_1.Auth)(),
    (0, common_1.Get)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update One' }),
    (0, decorators_1.Auth)(),
    (0, common_1.Put)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Reactivate' }),
    (0, decorators_1.Auth)(),
    (0, common_1.Put)(':id/reactivate'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "reactivate", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Remove One' }),
    (0, decorators_1.Auth)(),
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "remove", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Remove All' }),
    (0, decorators_1.Auth)(),
    (0, common_1.Patch)('remove-all'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "removeAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Suspend One' }),
    (0, decorators_1.Auth)(),
    (0, common_1.Put)(':id/suspend'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "suspend", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Find Personal Information' }),
    (0, decorators_1.Auth)(),
    (0, common_1.Get)(':id/personal-information'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findPersonalInformation", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Find Bank Detail' }),
    (0, decorators_1.Auth)(),
    (0, common_1.Get)(':id/bank-detail'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findBankDetail", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update Personal Information' }),
    (0, decorators_1.Auth)(),
    (0, common_1.Put)(':id/personal-information'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updatePersonalInformation", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update Bank Detail' }),
    (0, decorators_1.Auth)(),
    (0, common_1.Put)(':id/bank-detail'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateBankDetail", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update Bank Detail' }),
    (0, decorators_1.Auth)(),
    (0, common_1.Patch)(':id/email'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateEmail", null);
exports.UsersController = UsersController = __decorate([
    (0, decorators_1.Auth)(),
    (0, swagger_1.ApiTags)('Users'),
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
//# sourceMappingURL=users.controller.js.map