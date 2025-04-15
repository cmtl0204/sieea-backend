"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const database_providers_1 = require("./database.providers");
const seeders_1 = require("./seeders");
const catalogue_module_1 = require("../modules/common/catalogue/catalogue.module");
const catalogues_seeder_1 = require("./seeders/catalogues-seeder");
let DatabaseModule = class DatabaseModule {
};
exports.DatabaseModule = DatabaseModule;
exports.DatabaseModule = DatabaseModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [catalogue_module_1.CatalogueModule],
        providers: [
            ...database_providers_1.databaseProviders,
            seeders_1.DatabaseSeeder,
            catalogues_seeder_1.CataloguesSeeder,
            seeders_1.UsersSeeder,
            seeders_1.RolesSeeder,
            seeders_1.MenusSeeder,
        ],
        exports: [...database_providers_1.databaseProviders, seeders_1.DatabaseSeeder],
    })
], DatabaseModule);
//# sourceMappingURL=database.module.js.map