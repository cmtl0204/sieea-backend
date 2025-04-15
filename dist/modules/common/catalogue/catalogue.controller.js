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
exports.CatalogueController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const catalogue_service_1 = require("./catalogue.service");
const dto_1 = require("./dto");
const enums_1 = require("../../../shared/enums");
const decorators_1 = require("../../auth/decorators");
let CatalogueController = class CatalogueController {
    catalogueService;
    constructor(catalogueService) {
        this.catalogueService = catalogueService;
    }
    async create(payload) {
        const data = await this.catalogueService.create(payload);
        return {
            data,
            message: 'created',
        };
    }
    async catalogue(type) {
        const response = await this.catalogueService.catalogue(type);
        return {
            data: response,
            message: `catalogue`,
            title: `Catalogue`,
        };
    }
    async findAll(params) {
        const response = await this.catalogueService.findAll(params);
        return {
            data: response.data,
            pagination: response.pagination,
            message: `index`,
        };
    }
    async findOne(id) {
        const data = await this.catalogueService.findOne(id);
        return {
            data,
            message: `show ${id}`,
            title: `Success`,
        };
    }
    async update(id, payload) {
        const data = await this.catalogueService.update(id, payload);
        return {
            data: data,
            message: `Catalogue updated ${id}`,
            title: `Updated`,
        };
    }
    async remove(id) {
        const data = await this.catalogueService.remove(id);
        return {
            data,
            message: `Catalogue deleted ${id}`,
            title: `Deleted`,
        };
    }
    async removeAll(payload) {
        const data = await this.catalogueService.removeAll(payload);
        return {
            data,
            message: `Catalogues deleted`,
            title: `Deleted`,
        };
    }
    async findCache() {
        const response = await this.catalogueService.findCache();
        return {
            data: response,
            message: `Cache de Catalogos`,
            title: `Cache`,
        };
    }
    async loadCache() {
        const response = await this.catalogueService.loadCache();
        return {
            data: response,
            message: `Load Cache de Catalogos`,
            title: `Load Cache`,
        };
    }
};
exports.CatalogueController = CatalogueController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateCatalogueDto]),
    __metadata("design:returntype", Promise)
], CatalogueController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'List all catalogues' }),
    (0, common_1.Get)('catalogue'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Query)('type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CatalogueController.prototype, "catalogue", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'List of catalogues' }),
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.FilterCatalogueDto]),
    __metadata("design:returntype", Promise)
], CatalogueController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CatalogueController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.UpdateCatalogueDto]),
    __metadata("design:returntype", Promise)
], CatalogueController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CatalogueController.prototype, "remove", null);
__decorate([
    (0, common_1.Patch)('remove-all'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], CatalogueController.prototype, "removeAll", null);
__decorate([
    (0, decorators_1.PublicRoute)(),
    (0, swagger_1.ApiOperation)({ summary: 'Find Cache' }),
    (0, common_1.Get)('cache/get'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CatalogueController.prototype, "findCache", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Load Cache' }),
    (0, common_1.Get)('cache/load'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CatalogueController.prototype, "loadCache", null);
exports.CatalogueController = CatalogueController = __decorate([
    (0, swagger_1.ApiTags)('Catalogues'),
    (0, common_1.Controller)('catalogues'),
    __metadata("design:paramtypes", [catalogue_service_1.CataloguesService])
], CatalogueController);
//# sourceMappingURL=catalogue.controller.js.map