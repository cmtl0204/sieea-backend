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
exports.MenuEntity = void 0;
const typeorm_1 = require("typeorm");
const entities_1 = require("./");
let MenuEntity = class MenuEntity {
    id;
    createdAt;
    updatedAt;
    deletedAt;
    isVisible;
    parent;
    children;
    roles;
    code;
    icon;
    label;
    sort;
    routerLink;
    type;
    async setCode() {
        if (!this.code) {
            return;
        }
        this.code = this.code.toLowerCase().trim();
    }
};
exports.MenuEntity = MenuEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], MenuEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        name: 'created_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], MenuEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        name: 'updated_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], MenuEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({
        name: 'deleted_at',
        type: 'timestamp',
        nullable: true,
    }),
    __metadata("design:type", Date)
], MenuEntity.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'is_visible',
        type: 'boolean',
        default: true,
        comment: 'true=visible, false=no visible',
    }),
    __metadata("design:type", Boolean)
], MenuEntity.prototype, "isVisible", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => MenuEntity, (category) => category.children),
    (0, typeorm_1.JoinColumn)({ name: 'parent_id' }),
    __metadata("design:type", MenuEntity)
], MenuEntity.prototype, "parent", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => MenuEntity, (category) => category.parent),
    __metadata("design:type", Array)
], MenuEntity.prototype, "children", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => entities_1.RoleEntity),
    __metadata("design:type", Array)
], MenuEntity.prototype, "roles", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'code',
        type: 'varchar',
        comment: 'Codigo unico',
    }),
    __metadata("design:type", String)
], MenuEntity.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'icon',
        type: 'varchar',
        comment: 'Icono',
    }),
    __metadata("design:type", String)
], MenuEntity.prototype, "icon", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'label',
        type: 'varchar',
        comment: 'Nombre del menu',
    }),
    __metadata("design:type", String)
], MenuEntity.prototype, "label", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'sort',
        type: 'int',
        comment: 'Orden del menu',
    }),
    __metadata("design:type", Number)
], MenuEntity.prototype, "sort", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'router_link',
        type: 'varchar',
        nullable: true,
        comment: 'Nombre de la ruta',
    }),
    __metadata("design:type", String)
], MenuEntity.prototype, "routerLink", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'type',
        type: 'varchar',
        comment: 'Tipo de menu',
    }),
    __metadata("design:type", String)
], MenuEntity.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MenuEntity.prototype, "setCode", null);
exports.MenuEntity = MenuEntity = __decorate([
    (0, typeorm_1.Entity)('menus', { schema: 'auth' })
], MenuEntity);
//# sourceMappingURL=menu.entity.js.map