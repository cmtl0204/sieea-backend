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
exports.AuditEntity = void 0;
const typeorm_1 = require("typeorm");
const entities_1 = require("./");
let AuditEntity = class AuditEntity {
    id;
    createdAt;
    updatedAt;
    modelId;
    user;
    event;
    hostname;
    ipAddress;
    url;
    values;
};
exports.AuditEntity = AuditEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], AuditEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        name: 'created_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], AuditEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        name: 'updated_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], AuditEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'model_id',
        type: 'varchar',
        nullable: true,
        comment: 'Foreign Key de cualquier otra entidad',
    }),
    __metadata("design:type", String)
], AuditEntity.prototype, "modelId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.UserEntity),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", entities_1.UserEntity)
], AuditEntity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'event',
        type: 'varchar',
        comment: '',
    }),
    __metadata("design:type", String)
], AuditEntity.prototype, "event", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'hostname',
        type: 'varchar',
        comment: '',
    }),
    __metadata("design:type", String)
], AuditEntity.prototype, "hostname", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'ip_address',
        type: 'varchar',
        comment: '',
    }),
    __metadata("design:type", String)
], AuditEntity.prototype, "ipAddress", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'url',
        type: 'text',
        comment: '',
    }),
    __metadata("design:type", String)
], AuditEntity.prototype, "url", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'new_values',
        type: 'text',
        nullable: true,
        comment: '',
    }),
    __metadata("design:type", String)
], AuditEntity.prototype, "values", void 0);
exports.AuditEntity = AuditEntity = __decorate([
    (0, typeorm_1.Entity)('audits', { schema: 'auth' })
], AuditEntity);
//# sourceMappingURL=audit.entity.js.map