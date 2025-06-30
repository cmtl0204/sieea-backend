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
exports.KpiEntity = void 0;
const typeorm_1 = require("typeorm");
const entities_1 = require("../../auth/entities");
const state_entity_1 = require("../state/state.entity");
let KpiEntity = class KpiEntity {
    id;
    createdAt;
    updatedAt;
    deletedAt;
    enabled;
    user;
    userId;
    state;
    stateId;
    registeredAt;
};
exports.KpiEntity = KpiEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], KpiEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        name: 'created_at',
        type: 'timestamp',
        default: () => 'CURRENT_timestampP',
        comment: 'Fecha de creacion del registro',
    }),
    __metadata("design:type", Date)
], KpiEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        name: 'updated_at',
        type: 'timestamp',
        default: () => 'CURRENT_timestampP',
        comment: 'Fecha de actualizacion de la ultima actualizacion del registro',
    }),
    __metadata("design:type", Date)
], KpiEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({
        name: 'deleted_at',
        type: 'timestamp',
        nullable: true,
        comment: 'Fecha de eliminacion del registro',
    }),
    __metadata("design:type", Date)
], KpiEntity.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'enabled',
        type: 'boolean',
        default: true,
        comment: 'true=visible, false=no visible',
    }),
    __metadata("design:type", Boolean)
], KpiEntity.prototype, "enabled", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.UserEntity),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", entities_1.UserEntity)
], KpiEntity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'uuid',
        name: 'user_id',
        nullable: true,
        comment: 'Usuario',
    }),
    __metadata("design:type", String)
], KpiEntity.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => state_entity_1.StateEntity),
    (0, typeorm_1.JoinColumn)({ name: 'state_id' }),
    __metadata("design:type", state_entity_1.StateEntity)
], KpiEntity.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'uuid',
        name: 'state_id',
        nullable: true,
        comment: 'Usuario',
    }),
    __metadata("design:type", String)
], KpiEntity.prototype, "stateId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'registered_at',
        type: 'timestamp',
    }),
    __metadata("design:type", Date)
], KpiEntity.prototype, "registeredAt", void 0);
exports.KpiEntity = KpiEntity = __decorate([
    (0, typeorm_1.Entity)('kpi', { schema: 'core' })
], KpiEntity);
//# sourceMappingURL=kpi.entity.js.map