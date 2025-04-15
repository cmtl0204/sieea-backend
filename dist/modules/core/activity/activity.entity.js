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
exports.ActivityEntity = void 0;
const typeorm_1 = require("typeorm");
const additional_information_entity_1 = require("../../auth/entities/additional-information.entity");
let ActivityEntity = class ActivityEntity {
    id;
    createdAt;
    updatedAt;
    deletedAt;
    enabled;
    additionalInformation;
    additionalInformationId;
    code;
    description;
    label;
    name;
    completed;
    sort;
    category;
    registeredAt;
};
exports.ActivityEntity = ActivityEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ActivityEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        name: 'created_at',
        type: 'timestamp',
        default: () => 'CURRENT_timestampP',
        comment: 'Fecha de creacion del registro',
    }),
    __metadata("design:type", Date)
], ActivityEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        name: 'updated_at',
        type: 'timestamp',
        default: () => 'CURRENT_timestampP',
        comment: 'Fecha de actualizacion de la ultima actualizacion del registro',
    }),
    __metadata("design:type", Date)
], ActivityEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({
        name: 'deleted_at',
        type: 'timestamp',
        nullable: true,
        comment: 'Fecha de eliminacion del registro',
    }),
    __metadata("design:type", Date)
], ActivityEntity.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'enabled',
        type: 'boolean',
        default: true,
        comment: 'true=visible, false=no visible',
    }),
    __metadata("design:type", Boolean)
], ActivityEntity.prototype, "enabled", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => additional_information_entity_1.AdditionalInformationEntity, (entity) => entity.activities, {
        nullable: true,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'additional_information_id' }),
    __metadata("design:type", additional_information_entity_1.AdditionalInformationEntity)
], ActivityEntity.prototype, "additionalInformation", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'uuid',
        name: 'additional_information_id',
        nullable: true,
        comment: '',
    }),
    __metadata("design:type", String)
], ActivityEntity.prototype, "additionalInformationId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'code',
        type: 'varchar',
        nullable: true,
        comment: 'Codigo de la actividad',
    }),
    __metadata("design:type", String)
], ActivityEntity.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'description',
        type: 'varchar',
        comment: 'Descripcion de la actividad',
    }),
    __metadata("design:type", String)
], ActivityEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'label',
        type: 'varchar',
        comment: 'Label de la actividad',
    }),
    __metadata("design:type", String)
], ActivityEntity.prototype, "label", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'name',
        type: 'varchar',
        comment: 'Nombre de la actividad',
    }),
    __metadata("design:type", String)
], ActivityEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'completed',
        type: 'boolean',
        default: false,
        comment: 'Si ya completo',
    }),
    __metadata("design:type", Boolean)
], ActivityEntity.prototype, "completed", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'sort',
        type: 'int',
        comment: 'Orden',
    }),
    __metadata("design:type", Number)
], ActivityEntity.prototype, "sort", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'category',
        type: 'varchar',
        comment: 'Tipo de actividad',
    }),
    __metadata("design:type", String)
], ActivityEntity.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'registered_at',
        type: 'timestamp',
        comment: 'Tipo de actividad',
    }),
    __metadata("design:type", Date)
], ActivityEntity.prototype, "registeredAt", void 0);
exports.ActivityEntity = ActivityEntity = __decorate([
    (0, typeorm_1.Entity)('activities', { schema: 'core' })
], ActivityEntity);
//# sourceMappingURL=activity.entity.js.map