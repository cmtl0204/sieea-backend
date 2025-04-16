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
exports.AdditionalInformationController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const decorators_1 = require("../decorators");
const additional_information_service_1 = require("../services/additional-information.service");
const platform_express_1 = require("@nestjs/platform-express");
let AdditionalInformationController = class AdditionalInformationController {
    additionalInformationService;
    constructor(additionalInformationService) {
        this.additionalInformationService = additionalInformationService;
    }
    async leerExcel(file) {
        return this.additionalInformationService.readExcel(file);
    }
};
exports.AdditionalInformationController = AdditionalInformationController;
__decorate([
    (0, decorators_1.PublicRoute)(),
    (0, common_1.Post)('leer'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdditionalInformationController.prototype, "leerExcel", null);
exports.AdditionalInformationController = AdditionalInformationController = __decorate([
    (0, swagger_1.ApiTags)('AdditionalInformation'),
    (0, common_1.Controller)('additional-information'),
    __metadata("design:paramtypes", [additional_information_service_1.AdditionalInformationService])
], AdditionalInformationController);
//# sourceMappingURL=additional-information.controller.js.map