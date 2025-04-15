"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DpaModule = void 0;
const common_1 = require("@nestjs/common");
const dpa_controller_1 = require("./dpa.controller");
const dpa_provider_1 = require("./dpa.provider");
const dpa_service_1 = require("./dpa.service");
const cache_manager_1 = require("@nestjs/cache-manager");
let DpaModule = class DpaModule {
};
exports.DpaModule = DpaModule;
exports.DpaModule = DpaModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [cache_manager_1.CacheModule.register()],
        controllers: [dpa_controller_1.DpaController],
        providers: [dpa_provider_1.dpaProvider, dpa_service_1.CataloguesService],
        exports: [dpa_provider_1.dpaProvider, dpa_service_1.CataloguesService, dpa_service_1.CataloguesService],
    })
], DpaModule);
//# sourceMappingURL=dpa.module.js.map