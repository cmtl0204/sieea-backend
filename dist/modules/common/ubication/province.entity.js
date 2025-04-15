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
exports.ProvinceEntity = void 0;
const typeorm_1 = require("typeorm");
let ProvinceEntity = class ProvinceEntity {
    id;
    createdAt;
    updatedAt;
    deletedAt;
    name;
    provinceCode;
    enabled;
};
exports.ProvinceEntity = ProvinceEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ProvinceEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        name: 'created_at',
        type: 'timestamp',
        default: () => 'CURRENT_timestampP',
        comment: 'Fecha de creacion del registro',
    }),
    __metadata("design:type", Date)
], ProvinceEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        name: 'updated_at',
        type: 'timestamp',
        default: () => 'CURRENT_timestampP',
        comment: 'Fecha de actualizacion de la ultima actualizacion del registro',
    }),
    __metadata("design:type", Date)
], ProvinceEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({
        name: 'deleted_at',
        type: 'timestamp',
        nullable: true,
        comment: 'Fecha de eliminacion del registro',
    }),
    __metadata("design:type", Date)
], ProvinceEntity.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'name',
        type: 'varchar',
        comment: 'nombre provincia',
    }),
    __metadata("design:type", String)
], ProvinceEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'province_code',
        type: 'int',
        comment: 'codigo de la provincia',
    }),
    __metadata("design:type", Number)
], ProvinceEntity.prototype, "provinceCode", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'enabled',
        type: 'boolean',
        default: true,
        comment: 'true=activo, false=inactivo',
    }),
    __metadata("design:type", Boolean)
], ProvinceEntity.prototype, "enabled", void 0);
exports.ProvinceEntity = ProvinceEntity = __decorate([
    (0, typeorm_1.Entity)('provinces', { schema: 'common' })
], ProvinceEntity);
//# sourceMappingURL=province.entity.js.map