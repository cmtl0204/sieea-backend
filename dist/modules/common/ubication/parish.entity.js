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
exports.ParishEntity = void 0;
const typeorm_1 = require("typeorm");
const canton_entity_1 = require("./canton.entity");
let ParishEntity = class ParishEntity {
    id;
    createdAt;
    updatedAt;
    deletedAt;
    province;
    cantonId;
    name;
    provinceCode;
    cantonCode;
    parishCode;
    enabled;
};
exports.ParishEntity = ParishEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ParishEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        name: 'created_at',
        type: 'timestamp',
        default: () => 'CURRENT_timestampP',
        comment: 'Fecha de creacion del registro',
    }),
    __metadata("design:type", Date)
], ParishEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        name: 'updated_at',
        type: 'timestamp',
        default: () => 'CURRENT_timestampP',
        comment: 'Fecha de actualizacion de la ultima actualizacion del registro',
    }),
    __metadata("design:type", Date)
], ParishEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({
        name: 'deleted_at',
        type: 'timestamp',
        nullable: true,
        comment: 'Fecha de eliminacion del registro',
    }),
    __metadata("design:type", Date)
], ParishEntity.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => canton_entity_1.CantonEntity),
    (0, typeorm_1.JoinColumn)({ name: 'canton_id' }),
    __metadata("design:type", canton_entity_1.CantonEntity)
], ParishEntity.prototype, "province", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'integer',
        name: 'canton_id',
        nullable: true,
        comment: 'Canton',
    }),
    __metadata("design:type", Number)
], ParishEntity.prototype, "cantonId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'name',
        type: 'varchar',
        comment: 'nombre parroquia',
    }),
    __metadata("design:type", String)
], ParishEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'province_code',
        type: 'int',
        comment: 'codigo de la provincia',
    }),
    __metadata("design:type", Number)
], ParishEntity.prototype, "provinceCode", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'canton_code',
        type: 'int',
        comment: 'codigo del canton',
    }),
    __metadata("design:type", Number)
], ParishEntity.prototype, "cantonCode", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'parish_code',
        type: 'int',
        comment: 'codigo de la parroquia',
    }),
    __metadata("design:type", Number)
], ParishEntity.prototype, "parishCode", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'enabled',
        type: 'boolean',
        default: true,
        comment: 'true=activo, false=inactivo',
    }),
    __metadata("design:type", Boolean)
], ParishEntity.prototype, "enabled", void 0);
exports.ParishEntity = ParishEntity = __decorate([
    (0, typeorm_1.Entity)('parishes', { schema: 'common' })
], ParishEntity);
//# sourceMappingURL=parish.entity.js.map