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
exports.StateController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const decorators_1 = require("../../auth/decorators");
const state_service_1 = require("./state.service");
const platform_express_1 = require("@nestjs/platform-express");
let StateController = class StateController {
    service;
    constructor(service) {
        this.service = service;
    }
    async findActivitiesByIdentification(identification) {
        const response = await this.service.findStatesByIdentification(identification);
        return {
            data: response,
            message: `index`,
            title: `index`,
        };
    }
    async createCommentary(identification, payload) {
        const data = await this.service.createCommentary(identification, payload);
        return {
            data,
            message: 'created',
            title: 'created',
        };
    }
    async review(identification) {
        const data = await this.service.createReview(identification);
        return {
            data,
            message: 'Teléfonos consultados',
            title: 'Consulta',
        };
    }
    async leerExcel(file) {
        return this.service.readExcel(file);
    }
};
exports.StateController = StateController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'List of activities' }),
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Query)('identification')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StateController.prototype, "findActivitiesByIdentification", null);
__decorate([
    (0, common_1.Post)('commentaries'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Query)('identification')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], StateController.prototype, "createCommentary", null);
__decorate([
    (0, common_1.Post)('reviews'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Query)('identification')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StateController.prototype, "review", null);
__decorate([
    (0, decorators_1.PublicRoute)(),
    (0, common_1.Post)('leer'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StateController.prototype, "leerExcel", null);
exports.StateController = StateController = __decorate([
    (0, swagger_1.ApiTags)('States'),
    (0, decorators_1.Auth)(),
    (0, common_1.Controller)('states'),
    __metadata("design:paramtypes", [state_service_1.StateService])
], StateController);
//# sourceMappingURL=state.controller.js.map