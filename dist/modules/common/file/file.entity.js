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
exports.FileEntity = void 0;
const typeorm_1 = require("typeorm");
const catalogue_entity_1 = require("../catalogue/catalogue.entity");
let FileEntity = class FileEntity {
    id;
    createdAt;
    updatedAt;
    deletedAt;
    isVisible;
    modelId;
    type;
    typeId;
    description;
    extension;
    fileName;
    originalName;
    path;
    size;
};
exports.FileEntity = FileEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], FileEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        name: 'created_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
        comment: 'Fecha de creacion de la carrera',
    }),
    __metadata("design:type", Date)
], FileEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        name: 'updated_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
        comment: 'Fecha de actualizacion de la carrera',
    }),
    __metadata("design:type", Date)
], FileEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({
        name: 'deleted_at',
        type: 'timestamp',
        nullable: true,
        comment: 'Fecha de eliminacion de la carrera',
    }),
    __metadata("design:type", Date)
], FileEntity.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'is_visible',
        type: 'boolean',
        default: true,
        comment: 'true=visible, false=no visible',
    }),
    __metadata("design:type", Boolean)
], FileEntity.prototype, "isVisible", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'model_id',
        type: 'varchar',
        comment: 'Foreign Key de cualquier otra entidad',
    }),
    __metadata("design:type", String)
], FileEntity.prototype, "modelId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => catalogue_entity_1.CatalogueEntity, {
        nullable: true,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'type_id' }),
    __metadata("design:type", catalogue_entity_1.CatalogueEntity)
], FileEntity.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', name: 'type_id', comment: 'Tipo de documento' }),
    __metadata("design:type", String)
], FileEntity.prototype, "typeId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'description',
        type: 'text',
        nullable: true,
        comment: '',
    }),
    __metadata("design:type", String)
], FileEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'extension',
        type: 'varchar',
        comment: 'Extension ex. .pdf, .xlsx',
    }),
    __metadata("design:type", String)
], FileEntity.prototype, "extension", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'file_name',
        type: 'varchar',
        comment: 'In storage',
    }),
    __metadata("design:type", String)
], FileEntity.prototype, "fileName", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'original_name',
        type: 'varchar',
        comment: '',
    }),
    __metadata("design:type", String)
], FileEntity.prototype, "originalName", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'path',
        type: 'varchar',
        comment: '',
    }),
    __metadata("design:type", String)
], FileEntity.prototype, "path", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'size',
        type: 'float',
        comment: 'Size file in bytes',
    }),
    __metadata("design:type", Number)
], FileEntity.prototype, "size", void 0);
exports.FileEntity = FileEntity = __decorate([
    (0, typeorm_1.Entity)('files', { schema: 'core' })
], FileEntity);
//# sourceMappingURL=file.entity.js.map