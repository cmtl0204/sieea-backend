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
exports.CatalogueEntity = void 0;
const typeorm_1 = require("typeorm");
let CatalogueEntity = class CatalogueEntity {
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
exports.CatalogueEntity = CatalogueEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], CatalogueEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        name: 'created_at',
        type: 'timestamp',
        default: () => 'CURRENT_timestampP',
        comment: 'Fecha de creacion del registro',
    }),
    __metadata("design:type", Date)
], CatalogueEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        name: 'updated_at',
        type: 'timestamp',
        default: () => 'CURRENT_timestampP',
        comment: 'Fecha de actualizacion de la ultima actualizacion del registro',
    }),
    __metadata("design:type", Date)
], CatalogueEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({
        name: 'deleted_at',
        type: 'timestamp',
        nullable: true,
        comment: 'Fecha de eliminacion del registro',
    }),
    __metadata("design:type", Date)
], CatalogueEntity.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'is_visible',
        type: 'boolean',
        default: true,
        comment: 'true=visible, false=no visible',
    }),
    __metadata("design:type", Boolean)
], CatalogueEntity.prototype, "isVisible", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => CatalogueEntity, (category) => category.parent),
    __metadata("design:type", Array)
], CatalogueEntity.prototype, "children", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => CatalogueEntity, (category) => category.children, {
        nullable: true,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'parent_id' }),
    __metadata("design:type", CatalogueEntity)
], CatalogueEntity.prototype, "parent", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'uuid',
        name: 'parent_id',
        nullable: true,
        comment: 'Padre, Madre',
    }),
    __metadata("design:type", String)
], CatalogueEntity.prototype, "parentId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'code',
        type: 'varchar',
        comment: 'Codigo del catalogo',
    }),
    __metadata("design:type", String)
], CatalogueEntity.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'description',
        type: 'varchar',
        comment: 'Descripcion del catalogo',
    }),
    __metadata("design:type", String)
], CatalogueEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'name',
        type: 'varchar',
        comment: 'Nombre del catalogo',
    }),
    __metadata("design:type", String)
], CatalogueEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'required',
        type: 'boolean',
        default: true,
        comment: 'Si el catalogo es requerido o no',
    }),
    __metadata("design:type", Boolean)
], CatalogueEntity.prototype, "required", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'sort',
        type: 'int',
        comment: 'Orden',
    }),
    __metadata("design:type", Number)
], CatalogueEntity.prototype, "sort", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'type',
        type: 'varchar',
        comment: 'Tipo de menu',
    }),
    __metadata("design:type", String)
], CatalogueEntity.prototype, "type", void 0);
exports.CatalogueEntity = CatalogueEntity = __decorate([
    (0, typeorm_1.Entity)('catalogues', { schema: 'common' })
], CatalogueEntity);
//# sourceMappingURL=catalogue.entity.js.map