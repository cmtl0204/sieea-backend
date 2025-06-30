"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KpiModule = void 0;
const common_1 = require("@nestjs/common");
const kpi_controller_1 = require("./kpi.controller");
const kpi_provider_1 = require("./kpi.provider");
const cache_manager_1 = require("@nestjs/cache-manager");
const state_service_1 = require("../state/state.service");
let KpiModule = class KpiModule {
};
exports.KpiModule = KpiModule;
exports.KpiModule = KpiModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [cache_manager_1.CacheModule.register()],
        controllers: [kpi_controller_1.KpiController],
        providers: [kpi_provider_1.kpiProvider, state_service_1.StateService],
        exports: [kpi_provider_1.kpiProvider],
    })
], KpiModule);
//# sourceMappingURL=kpi.module.js.map