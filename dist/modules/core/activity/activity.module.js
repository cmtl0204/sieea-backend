"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityModule = void 0;
const common_1 = require("@nestjs/common");
const activity_controller_1 = require("./activity.controller");
const activity_provider_1 = require("./activity.provider");
const cache_manager_1 = require("@nestjs/cache-manager");
const activity_service_1 = require("./activity.service");
let ActivityModule = class ActivityModule {
};
exports.ActivityModule = ActivityModule;
exports.ActivityModule = ActivityModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [cache_manager_1.CacheModule.register()],
        controllers: [activity_controller_1.ActivityController],
        providers: [activity_provider_1.activityProvider, activity_service_1.ActivityService],
        exports: [activity_provider_1.activityProvider],
    })
], ActivityModule);
//# sourceMappingURL=activity.module.js.map