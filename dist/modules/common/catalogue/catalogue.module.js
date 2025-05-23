"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogueModule = void 0;
const common_1 = require("@nestjs/common");
const catalogue_controller_1 = require("./catalogue.controller");
const catalogue_provider_1 = require("./catalogue.provider");
const catalogue_service_1 = require("./catalogue.service");
const cache_manager_1 = require("@nestjs/cache-manager");
let CatalogueModule = class CatalogueModule {
};
exports.CatalogueModule = CatalogueModule;
exports.CatalogueModule = CatalogueModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [cache_manager_1.CacheModule.register()],
        controllers: [catalogue_controller_1.CatalogueController],
        providers: [catalogue_provider_1.catalogueProvider, catalogue_service_1.CataloguesService],
        exports: [catalogue_provider_1.catalogueProvider, catalogue_service_1.CataloguesService],
    })
], CatalogueModule);
//# sourceMappingURL=catalogue.module.js.map