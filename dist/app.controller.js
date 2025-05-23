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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const seeders_1 = require("./database/seeders");
const decorators_1 = require("./modules/auth/decorators");
let AppController = class AppController {
    databaseSeeder;
    constructor(databaseSeeder) {
        this.databaseSeeder = databaseSeeder;
    }
    async init() {
        await this.databaseSeeder.run();
        return {
            data: true,
            message: '',
            title: '',
        };
    }
};
exports.AppController = AppController;
__decorate([
    (0, decorators_1.PublicRoute)(),
    (0, common_1.Get)('init'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "init", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [seeders_1.DatabaseSeeder])
], AppController);
//# sourceMappingURL=app.controller.js.map