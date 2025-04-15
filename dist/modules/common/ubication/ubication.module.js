"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UbicationModule = void 0;
const common_1 = require("@nestjs/common");
const ubication_controller_1 = require("./ubication.controller");
const ubication_provider_1 = require("./ubication.provider");
const ubication_service_1 = require("./ubication.service");
const cache_manager_1 = require("@nestjs/cache-manager");
let UbicationModule = class UbicationModule {
};
exports.UbicationModule = UbicationModule;
exports.UbicationModule = UbicationModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [cache_manager_1.CacheModule.register()],
        controllers: [ubication_controller_1.UbicationController],
        providers: [ubication_provider_1.ubicationProvider, ubication_service_1.CataloguesService],
        exports: [ubication_provider_1.ubicationProvider, ubication_service_1.CataloguesService, ubication_service_1.CataloguesService],
    })
], UbicationModule);
//# sourceMappingURL=ubication.module.js.map