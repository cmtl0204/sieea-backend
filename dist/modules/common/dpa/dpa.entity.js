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
exports.DpaEntity = void 0;
const typeorm_1 = require("typeorm");
let DpaEntity = class DpaEntity {
    id;
    createdAt;
    updatedAt;
    deletedAt;
    isVisible;
    children;
    parent;
    parentId;
    code;
    description;
    name;
    required;
    sort;
    type;
};
exports.DpaEntity = DpaEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", String)
], DpaEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        name: 'created_at',
        type: 'timestamp',
        default: () => 'CURRENT_timestampP',
        comment: 'Fecha de creacion del registro',
    }),
    __metadata("design:type", Date)
], DpaEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        name: 'updated_at',
        type: 'timestamp',
        default: () => 'CURRENT_timestampP',
        comment: 'Fecha de actualizacion de la ultima actualizacion del registro',
    }),
    __metadata("design:type", Date)
], DpaEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({
        name: 'deleted_at',
        type: 'timestamp',
        nullable: true,
        comment: 'Fecha de eliminacion del registro',
    }),
    __metadata("design:type", Date)
], DpaEntity.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'is_visible',
        type: 'boolean',
        default: true,
        comment: 'true=visible, false=no visible',
    }),
    __metadata("design:type", Boolean)
], DpaEntity.prototype, "isVisible", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => DpaEntity, (category) => category.parent),
    __metadata("design:type", Array)
], DpaEntity.prototype, "children", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => DpaEntity, (category) => category.children, {
        nullable: true,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'parent_id' }),
    __metadata("design:type", DpaEntity)
], DpaEntity.prototype, "parent", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'uuid',
        name: 'parent_id',
        nullable: true,
        comment: 'Padre, Madre',
    }),
    __metadata("design:type", String)
], DpaEntity.prototype, "parentId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'code',
        type: 'varchar',
        comment: 'Codigo del catalogo',
    }),
    __metadata("design:type", String)
], DpaEntity.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'description',
        type: 'varchar',
        comment: 'Descripcion del catalogo',
    }),
    __metadata("design:type", String)
], DpaEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'name',
        type: 'varchar',
        comment: 'Nombre del catalogo',
    }),
    __metadata("design:type", String)
], DpaEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'required',
        type: 'boolean',
        default: true,
        comment: 'Si el catalogo es requerido o no',
    }),
    __metadata("design:type", Boolean)
], DpaEntity.prototype, "required", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'sort',
        type: 'int',
        comment: 'Orden',
    }),
    __metadata("design:type", Number)
], DpaEntity.prototype, "sort", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'type',
        type: 'varchar',
        comment: 'Tipo de menu',
    }),
    __metadata("design:type", String)
], DpaEntity.prototype, "type", void 0);
exports.DpaEntity = DpaEntity = __decorate([
    (0, typeorm_1.Entity)('dpa', { schema: 'common' })
], DpaEntity);
//# sourceMappingURL=dpa.entity.js.map