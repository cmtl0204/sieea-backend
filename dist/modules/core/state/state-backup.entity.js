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
exports.StateBackupEntity = void 0;
const typeorm_1 = require("typeorm");
const entities_1 = require("../../auth/entities");
const additional_information_entity_1 = require("../../auth/entities/additional-information.entity");
let StateBackupEntity = class StateBackupEntity {
    id;
    createdAt;
    updatedAt;
    deletedAt;
    enabled;
    additionalInformation;
    additionalInformationId;
    user;
    userId;
    habilitado;
    direccionZonal;
    provincia;
    cedula;
    nombres;
    actividad;
    curso;
    actividadA1;
    actividadA2;
    metaA1;
    metaA2;
    actividadB1;
    actividadB2;
    metaB1;
    metaB2;
    metaC1;
    metaC2;
    cantidadA1;
    cantidadA2;
    cantidadB1;
    cantidadB2;
    cantidadC1;
    cantidadC2;
    totalCantidadAbril;
    totalCantidadMayo;
    cumple;
    comentario;
    clickCount;
    transactionalCode;
};
exports.StateBackupEntity = StateBackupEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], StateBackupEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        name: 'created_at',
        type: 'timestamp',
        default: () => 'CURRENT_timestampP',
        comment: 'Fecha de creacion del registro',
    }),
    __metadata("design:type", Date)
], StateBackupEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        name: 'updated_at',
        type: 'timestamp',
        default: () => 'CURRENT_timestampP',
        comment: 'Fecha de actualizacion de la ultima actualizacion del registro',
    }),
    __metadata("design:type", Date)
], StateBackupEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({
        name: 'deleted_at',
        type: 'timestamp',
        nullable: true,
        comment: 'Fecha de eliminacion del registro',
    }),
    __metadata("design:type", Date)
], StateBackupEntity.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'enabled',
        type: 'boolean',
        default: true,
        comment: 'true=visible, false=no visible',
    }),
    __metadata("design:type", Boolean)
], StateBackupEntity.prototype, "enabled", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => additional_information_entity_1.AdditionalInformationEntity, (entity) => entity.activities, {
        nullable: true,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'additional_information_id' }),
    __metadata("design:type", additional_information_entity_1.AdditionalInformationEntity)
], StateBackupEntity.prototype, "additionalInformation", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'uuid',
        name: 'additional_information_id',
        nullable: true,
        comment: '',
    }),
    __metadata("design:type", String)
], StateBackupEntity.prototype, "additionalInformationId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.UserEntity),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", entities_1.UserEntity)
], StateBackupEntity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'uuid',
        name: 'user_id',
        nullable: true,
        comment: 'Usuario',
    }),
    __metadata("design:type", String)
], StateBackupEntity.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'habilitado',
        type: 'varchar',
    }),
    __metadata("design:type", String)
], StateBackupEntity.prototype, "habilitado", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'direccion_zonal',
        type: 'varchar',
    }),
    __metadata("design:type", String)
], StateBackupEntity.prototype, "direccionZonal", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'provincia',
        type: 'varchar',
    }),
    __metadata("design:type", String)
], StateBackupEntity.prototype, "provincia", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'cedula',
        type: 'varchar',
    }),
    __metadata("design:type", String)
], StateBackupEntity.prototype, "cedula", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'nombres',
        type: 'varchar',
    }),
    __metadata("design:type", String)
], StateBackupEntity.prototype, "nombres", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'actividad',
        type: 'varchar',
    }),
    __metadata("design:type", String)
], StateBackupEntity.prototype, "actividad", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'curso',
        type: 'varchar',
        nullable: true,
    }),
    __metadata("design:type", String)
], StateBackupEntity.prototype, "curso", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'actividad_a_1',
        type: 'varchar',
        nullable: true,
    }),
    __metadata("design:type", String)
], StateBackupEntity.prototype, "actividadA1", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'actividad_a_2',
        type: 'varchar',
        nullable: true,
    }),
    __metadata("design:type", String)
], StateBackupEntity.prototype, "actividadA2", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'meta_a_1',
        type: 'varchar',
        nullable: true,
    }),
    __metadata("design:type", String)
], StateBackupEntity.prototype, "metaA1", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'meta_a_2',
        type: 'varchar',
        nullable: true,
    }),
    __metadata("design:type", String)
], StateBackupEntity.prototype, "metaA2", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'actividad_b_1',
        type: 'varchar',
        nullable: true,
    }),
    __metadata("design:type", String)
], StateBackupEntity.prototype, "actividadB1", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'actividad_b_2',
        type: 'varchar',
        nullable: true,
    }),
    __metadata("design:type", String)
], StateBackupEntity.prototype, "actividadB2", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'meta_b_1',
        type: 'varchar',
        nullable: true,
    }),
    __metadata("design:type", String)
], StateBackupEntity.prototype, "metaB1", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'meta_b_2',
        type: 'varchar',
        nullable: true,
    }),
    __metadata("design:type", String)
], StateBackupEntity.prototype, "metaB2", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'meta_c_1',
        type: 'varchar',
        nullable: true,
    }),
    __metadata("design:type", String)
], StateBackupEntity.prototype, "metaC1", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'meta_c_2',
        type: 'varchar',
        nullable: true,
    }),
    __metadata("design:type", String)
], StateBackupEntity.prototype, "metaC2", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'cantidad_a_1',
        type: 'varchar',
        nullable: true,
    }),
    __metadata("design:type", String)
], StateBackupEntity.prototype, "cantidadA1", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'cantidad_a_2',
        type: 'varchar',
        nullable: true,
    }),
    __metadata("design:type", String)
], StateBackupEntity.prototype, "cantidadA2", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'cantidad_b_1',
        type: 'varchar',
        nullable: true,
    }),
    __metadata("design:type", String)
], StateBackupEntity.prototype, "cantidadB1", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'cantidad_b_2',
        type: 'varchar',
        nullable: true,
    }),
    __metadata("design:type", String)
], StateBackupEntity.prototype, "cantidadB2", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'cantidad_c_1',
        type: 'varchar',
        nullable: true,
    }),
    __metadata("design:type", String)
], StateBackupEntity.prototype, "cantidadC1", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'cantidad_c_2',
        type: 'varchar',
        nullable: true,
    }),
    __metadata("design:type", String)
], StateBackupEntity.prototype, "cantidadC2", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'total_cantidad_abril',
        type: 'varchar',
        nullable: true,
    }),
    __metadata("design:type", String)
], StateBackupEntity.prototype, "totalCantidadAbril", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'total_cantidad_mayo',
        type: 'varchar',
        nullable: true,
    }),
    __metadata("design:type", String)
], StateBackupEntity.prototype, "totalCantidadMayo", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'cumple',
        type: 'varchar',
    }),
    __metadata("design:type", String)
], StateBackupEntity.prototype, "cumple", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'comentario',
        type: 'text',
        nullable: true,
    }),
    __metadata("design:type", String)
], StateBackupEntity.prototype, "comentario", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'click_count',
        type: 'integer',
        nullable: true,
    }),
    __metadata("design:type", Number)
], StateBackupEntity.prototype, "clickCount", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'transactional_code',
        type: 'varchar',
        nullable: true,
    }),
    __metadata("design:type", String)
], StateBackupEntity.prototype, "transactionalCode", void 0);
exports.StateBackupEntity = StateBackupEntity = __decorate([
    (0, typeorm_1.Entity)('states_backup', { schema: 'core' })
], StateBackupEntity);
//# sourceMappingURL=state-backup.entity.js.map