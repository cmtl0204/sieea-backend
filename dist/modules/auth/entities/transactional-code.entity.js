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
exports.TransactionalCodeEntity = void 0;
const typeorm_1 = require("typeorm");
let TransactionalCodeEntity = class TransactionalCodeEntity {
    id;
    createdAt;
    updatedAt;
    username;
    token;
    isUsed;
    type;
};
exports.TransactionalCodeEntity = TransactionalCodeEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], TransactionalCodeEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        name: 'created_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], TransactionalCodeEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        name: 'updated_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], TransactionalCodeEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'username',
        type: 'varchar',
        comment: 'Nombre de usuario',
    }),
    __metadata("design:type", String)
], TransactionalCodeEntity.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'token',
        type: 'varchar',
        comment: 'Token',
    }),
    __metadata("design:type", String)
], TransactionalCodeEntity.prototype, "token", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'is_used',
        type: 'boolean',
        default: false,
        comment: 'true=used, false=no used',
    }),
    __metadata("design:type", Boolean)
], TransactionalCodeEntity.prototype, "isUsed", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'type',
        type: 'varchar',
        comment: 'Type',
    }),
    __metadata("design:type", String)
], TransactionalCodeEntity.prototype, "type", void 0);
exports.TransactionalCodeEntity = TransactionalCodeEntity = __decorate([
    (0, typeorm_1.Entity)('transactional_codes', { schema: 'auth' })
], TransactionalCodeEntity);
//# sourceMappingURL=transactional-code.entity.js.map