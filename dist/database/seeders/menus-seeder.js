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
exports.MenusSeeder = void 0;
const common_1 = require("@nestjs/common");
const services_1 = require("../../modules/auth/services");
const enums_1 = require("../../modules/auth/enums");
let MenusSeeder = class MenusSeeder {
    menusService;
    rolesService;
    constructor(menusService, rolesService) {
        this.menusService = menusService;
        this.rolesService = rolesService;
    }
    async run() {
        await this.createMenus();
        await this.createMenuRole();
    }
    async createMenus() {
        let menus = [];
        menus = [];
        menus.push({
            code: 'users',
            icon: 'pi pi-users',
            isVisible: true,
            label: 'Usuarios',
            sort: 1,
            routerLink: '/admin/users',
            type: enums_1.MenuTypeEnum.LEFT_SIDE,
        }, {
            code: 'menus',
            icon: 'pi pi-users',
            isVisible: true,
            label: 'Menus',
            sort: 2,
            routerLink: '/admin/menus',
            type: enums_1.MenuTypeEnum.LEFT_SIDE,
        });
        for (const menu of menus) {
            await this.menusService.create(menu);
        }
    }
    async createMenuRole() {
        const menusAll = (await this.menusService.findAll()).data;
        let role = await this.rolesService.findByCode(enums_1.RoleEnum.ADMIN);
        role.menus = menusAll.filter((menu) => menu.code === enums_1.RoleEnum.ADMIN);
        await this.rolesService.createMenus(role);
        role = await this.rolesService.findByCode(enums_1.RoleEnum.STUDENT);
        role.menus = menusAll.filter((menu) => menu.code === enums_1.RoleEnum.STUDENT);
        await this.rolesService.createMenus(role);
        role = await this.rolesService.findByCode(enums_1.RoleEnum.TEACHER);
        role.menus = menusAll.filter((menu) => menu.code === enums_1.RoleEnum.TEACHER);
        await this.rolesService.createMenus(role);
        role = await this.rolesService.findByCode(enums_1.RoleEnum.COORDINATOR_CAREER);
        role.menus = menusAll.filter((menu) => menu.code === enums_1.RoleEnum.COORDINATOR_CAREER);
        await this.rolesService.createMenus(role);
        role = await this.rolesService.findByCode(enums_1.RoleEnum.REVIEWER);
        role.menus = menusAll.filter((menu) => menu.code === enums_1.RoleEnum.REVIEWER);
        await this.rolesService.createMenus(role);
        role = await this.rolesService.findByCode(enums_1.RoleEnum.SECRETARY);
        role.menus = menusAll.filter((menu) => menu.code === enums_1.RoleEnum.SECRETARY);
        await this.rolesService.createMenus(role);
        role = await this.rolesService.findByCode(enums_1.RoleEnum.WELFARE);
        role.menus = menusAll.filter((menu) => menu.code === enums_1.RoleEnum.WELFARE);
        await this.rolesService.createMenus(role);
    }
};
exports.MenusSeeder = MenusSeeder;
exports.MenusSeeder = MenusSeeder = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [services_1.MenusService,
        services_1.RolesService])
], MenusSeeder);
//# sourceMappingURL=menus-seeder.js.map