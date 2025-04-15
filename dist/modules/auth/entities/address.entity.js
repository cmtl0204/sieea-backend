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
exports.AddressEntity = void 0;
const typeorm_1 = require("typeorm");
const dpa_entity_1 = require("../../common/dpa/dpa.entity");
const user_entity_1 = require("./user.entity");
let AddressEntity = class AddressEntity {
    id;
    createdAt;
    updatedAt;
    deletedAt;
    user;
    userId;
    province;
    provinceId;
    canton;
    cantonId;
    parish;
    parishId;
    neighborhood;
    mainStreet;
    secondaryStreet;
};
exports.AddressEntity = AddressEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], AddressEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        name: 'created_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], AddressEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        name: 'updated_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], AddressEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({
        name: 'deleted_at',
        type: 'timestamp',
        nullable: true,
    }),
    __metadata("design:type", Date)
], AddressEntity.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", user_entity_1.UserEntity)
], AddressEntity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'uuid',
        name: 'user_id',
        nullable: true,
        comment: 'Usuario',
    }),
    __metadata("design:type", String)
], AddressEntity.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => dpa_entity_1.DpaEntity, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'province_id' }),
    __metadata("design:type", dpa_entity_1.DpaEntity)
], AddressEntity.prototype, "province", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'bigint',
        name: 'province_id',
        nullable: true,
        comment: 'Provincia',
    }),
    __metadata("design:type", Number)
], AddressEntity.prototype, "provinceId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => dpa_entity_1.DpaEntity, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'canton_id' }),
    __metadata("design:type", dpa_entity_1.DpaEntity)
], AddressEntity.prototype, "canton", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'bigint',
        name: 'canton_id',
        nullable: true,
        comment: 'Canton',
    }),
    __metadata("design:type", Number)
], AddressEntity.prototype, "cantonId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => dpa_entity_1.DpaEntity, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'parish_id' }),
    __metadata("design:type", dpa_entity_1.DpaEntity)
], AddressEntity.prototype, "parish", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'bigint',
        name: 'parish_id',
        nullable: true,
        comment: 'Parroquia',
    }),
    __metadata("design:type", Number)
], AddressEntity.prototype, "parishId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'neighborhood',
        type: 'varchar',
        nullable: true,
        comment: 'Barrio',
    }),
    __metadata("design:type", String)
], AddressEntity.prototype, "neighborhood", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'main_street',
        type: 'varchar',
        nullable: true,
        comment: 'Calle Principal',
    }),
    __metadata("design:type", String)
], AddressEntity.prototype, "mainStreet", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'secondary_street',
        type: 'varchar',
        nullable: true,
        comment: 'Calle Secundaria',
    }),
    __metadata("design:type", String)
], AddressEntity.prototype, "secondaryStreet", void 0);
exports.AddressEntity = AddressEntity = __decorate([
    (0, typeorm_1.Entity)('address', { schema: 'auth' })
], AddressEntity);
//# sourceMappingURL=address.entity.js.map