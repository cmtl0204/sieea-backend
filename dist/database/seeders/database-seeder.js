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
exports.DatabaseSeeder = void 0;
const common_1 = require("@nestjs/common");
const fs = require("fs");
const path_1 = require("path");
const seeders_1 = require("./");
const catalogues_seeder_1 = require("./catalogues-seeder");
let DatabaseSeeder = class DatabaseSeeder {
    cataloguesSeeder;
    usersSeeder;
    rolesSeeder;
    menusSeeder;
    constructor(cataloguesSeeder, usersSeeder, rolesSeeder, menusSeeder) {
        this.cataloguesSeeder = cataloguesSeeder;
        this.usersSeeder = usersSeeder;
        this.rolesSeeder = rolesSeeder;
        this.menusSeeder = menusSeeder;
    }
    async run() {
        await this.cataloguesSeeder.run();
        await this.rolesSeeder.run();
        await this.usersSeeder.run();
        await this.menusSeeder.run();
        this.createUploadsDirectories();
    }
    createUploadsDirectories() {
        const date = new Date();
        for (let i = date.getFullYear(); i < date.getFullYear() + 20; i++) {
            const path = (0, path_1.join)(process.cwd(), 'storage/private/uploads', i.toString());
            fs.mkdir(path, (err) => {
                if (err) {
                }
            });
            for (let j = 1; j <= 12; j++) {
                const path = (0, path_1.join)(process.cwd(), 'storage/private/uploads', i.toString());
                fs.mkdir(path, (err) => {
                    if (err) {
                    }
                });
            }
        }
    }
};
exports.DatabaseSeeder = DatabaseSeeder;
exports.DatabaseSeeder = DatabaseSeeder = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [catalogues_seeder_1.CataloguesSeeder,
        seeders_1.UsersSeeder,
        seeders_1.RolesSeeder,
        seeders_1.MenusSeeder])
], DatabaseSeeder);
//# sourceMappingURL=database-seeder.js.map