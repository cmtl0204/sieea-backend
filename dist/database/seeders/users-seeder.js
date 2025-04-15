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
exports.UsersSeeder = void 0;
const common_1 = require("@nestjs/common");
const faker_1 = require("@faker-js/faker");
const enums_1 = require("../../shared/enums");
const enums_2 = require("../../modules/auth/enums");
const services_1 = require("../../modules/auth/services");
const catalogue_service_1 = require("../../modules/common/catalogue/catalogue.service");
const users_service_1 = require("../../modules/auth/services/users.service");
let UsersSeeder = class UsersSeeder {
    rolesService;
    usersService;
    cataloguesService;
    identificationTypes = [];
    roles = [];
    nationalities = [];
    genders = [];
    constructor(rolesService, usersService, cataloguesService) {
        this.rolesService = rolesService;
        this.usersService = usersService;
        this.cataloguesService = cataloguesService;
    }
    async run() {
        await this.loadRoles();
        await this.loadCatalogues();
        await this.createUsers();
    }
    async loadRoles() {
        this.roles = (await this.rolesService.findAll()).data;
    }
    async loadCatalogues() {
        const catalogues = (await this.cataloguesService.findAll())
            .data;
        this.identificationTypes = catalogues.filter((catalogue) => catalogue.type === enums_1.CatalogueTypeEnum.IDENTIFICATION_TYPE);
        this.nationalities = catalogues.filter((catalogue) => catalogue.type === enums_1.CatalogueTypeEnum.NATIONALITY);
        this.genders = catalogues.filter((catalogue) => catalogue.type === enums_1.CatalogueTypeEnum.GENDER);
    }
    async createUsers() {
        const users = [];
        const adminRole = this.roles.find((role) => role.code === enums_2.RoleEnum.ADMIN);
        users.push({
            birthdate: faker_1.faker.date.birthdate(),
            cellPhone: '0987654321',
            identification: 'user1',
            email: 'admin@correo.com',
            lastname: 'Perez',
            name: 'Admin',
            password: 'admin',
            passwordChanged: false,
            personalEmail: faker_1.faker.internet.email(),
            roles: [adminRole],
            username: 'admin',
            nationality: this.nationalities.find((item) => item.code === 'ecu'),
            gender: this.genders.find((item) => item.code === 'm'),
        });
        for (const user of users) {
            await this.usersService.create(user);
        }
    }
};
exports.UsersSeeder = UsersSeeder;
exports.UsersSeeder = UsersSeeder = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [services_1.RolesService,
        users_service_1.UsersService,
        catalogue_service_1.CataloguesService])
], UsersSeeder);
//# sourceMappingURL=users-seeder.js.map