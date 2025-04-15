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
exports.CantonEntity = void 0;
const typeorm_1 = require("typeorm");
const province_entity_1 = require("./province.entity");
let CantonEntity = class CantonEntity {
    id;
    createdAt;
    updatedAt;
    deletedAt;
    province;
    provinceId;
    name;
    provinceCode;
    cantonCode;
    enabled;
};
exports.CantonEntity = CantonEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], CantonEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        name: 'created_at',
        type: 'timestamp',
        default: () => 'CURRENT_timestampP',
        comment: 'Fecha de creacion del registro',
    }),
    __metadata("design:type", Date)
], CantonEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        name: 'updated_at',
        type: 'timestamp',
        default: () => 'CURRENT_timestampP',
        comment: 'Fecha de actualizacion de la ultima actualizacion del registro',
    }),
    __metadata("design:type", Date)
], CantonEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({
        name: 'deleted_at',
        type: 'timestamp',
        nullable: true,
        comment: 'Fecha de eliminacion del registro',
    }),
    __metadata("design:type", Date)
], CantonEntity.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => province_entity_1.ProvinceEntity),
    (0, typeorm_1.JoinColumn)({ name: 'province_id' }),
    __metadata("design:type", province_entity_1.ProvinceEntity)
], CantonEntity.prototype, "province", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'integer',
        name: 'province_id',
        nullable: true,
        comment: 'Province',
    }),
    __metadata("design:type", Number)
], CantonEntity.prototype, "provinceId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'name',
        type: 'varchar',
        comment: 'nombre canton',
    }),
    __metadata("design:type", String)
], CantonEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'province_code',
        type: 'int',
        comment: 'codigo de la provincia',
    }),
    __metadata("design:type", Number)
], CantonEntity.prototype, "provinceCode", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'canton_code',
        type: 'int',
        comment: 'codigo del canton',
    }),
    __metadata("design:type", Number)
], CantonEntity.prototype, "cantonCode", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'enabled',
        type: 'boolean',
        default: true,
        comment: 'true=activo, false=inactivo',
    }),
    __metadata("design:type", Boolean)
], CantonEntity.prototype, "enabled", void 0);
exports.CantonEntity = CantonEntity = __decorate([
    (0, typeorm_1.Entity)('cantons', { schema: 'common' })
], CantonEntity);
//# sourceMappingURL=canton.entity.js.map