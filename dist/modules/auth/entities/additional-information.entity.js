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
exports.AdditionalInformationEntity = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
const activity_entity_1 = require("../../core/activity/activity.entity");
let AdditionalInformationEntity = class AdditionalInformationEntity {
    id;
    createdAt;
    updatedAt;
    deletedAt;
    activities;
    user;
    userId;
    idEcuatorianosenaccion;
    cedula;
    fechaNacimiento;
    edad;
    nombres;
    genero;
    idProvincia;
    provincia;
    id_canton;
    canton;
    idParroquia;
    parroquia;
    barrio;
    callePrincipal;
    calleSecundaria;
    telefono;
    correo;
    nombreInstitucion;
    siglas;
    nombreActividad;
    tipoCuenta;
    numeroCuenta;
    nombreCorto;
    nacionalidad;
    consentimiento;
    terminosCondiciones;
    fechaRegistro;
    fechaModifica;
    cumpleEdad;
    cumpleProvinciaResidencia;
    cumpleAfiliacionIess;
    cumpleTipoAfiliacionIess;
    cumpleBeneficiosTransferenciasMies;
    cumpleFechaFallecimiento;
    cumpleAntecedentesPenales;
    potencialBeneficiario;
    fechaCorte;
    numeroPago;
    monto;
    estadoOpi;
    cambioCuenta;
    fechaEmision;
    fechaExpiracion;
    codigoActividad;
    fechaActualizacionCorreo;
    setCorreo() {
        if (!this.correo) {
            return;
        }
        this.correo = this.correo.toLowerCase().trim();
    }
};
exports.AdditionalInformationEntity = AdditionalInformationEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], AdditionalInformationEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        name: 'created_at',
        type: 'timestamp',
        default: () => 'CURRENT_timestampP',
        comment: 'Fecha de creacion del registro',
    }),
    __metadata("design:type", Date)
], AdditionalInformationEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        name: 'updated_at',
        type: 'timestamp',
        default: () => 'CURRENT_timestampP',
        comment: 'Fecha de actualizacion de la ultima actualizacion del registro',
    }),
    __metadata("design:type", Date)
], AdditionalInformationEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({
        name: 'deleted_at',
        type: 'timestamp',
        nullable: true,
        comment: 'Fecha de eliminacion del registro',
    }),
    __metadata("design:type", Date)
], AdditionalInformationEntity.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => activity_entity_1.ActivityEntity, (entity) => entity.additionalInformation),
    __metadata("design:type", Array)
], AdditionalInformationEntity.prototype, "activities", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", user_entity_1.UserEntity)
], AdditionalInformationEntity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'uuid',
        name: 'user_id',
        nullable: true,
        comment: 'Usuario',
    }),
    __metadata("design:type", String)
], AdditionalInformationEntity.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'id_ecuatorianosenaccion',
        type: 'varchar',
        unique: true,
        comment: 'id_ecuatorianosenaccion',
    }),
    __metadata("design:type", String)
], AdditionalInformationEntity.prototype, "idEcuatorianosenaccion", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'cedula',
        type: 'varchar',
        unique: true,
        comment: 'cedula',
    }),
    __metadata("design:type", String)
], AdditionalInformationEntity.prototype, "cedula", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'fecha_nacimiento',
        type: 'timestamp',
        nullable: true,
        comment: 'Fecha de creacion del registro',
    }),
    __metadata("design:type", Date)
], AdditionalInformationEntity.prototype, "fechaNacimiento", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'edad',
        type: 'varchar',
        comment: 'edad',
    }),
    __metadata("design:type", String)
], AdditionalInformationEntity.prototype, "edad", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'nombres',
        type: 'varchar',
        comment: 'nombres',
    }),
    __metadata("design:type", String)
], AdditionalInformationEntity.prototype, "nombres", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'genero',
        type: 'varchar',
        comment: 'genero',
    }),
    __metadata("design:type", String)
], AdditionalInformationEntity.prototype, "genero", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'id_provincia',
        type: 'int',
        comment: 'id_provincia',
    }),
    __metadata("design:type", Number)
], AdditionalInformationEntity.prototype, "idProvincia", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'provincia',
        type: 'varchar',
        comment: 'provincia',
    }),
    __metadata("design:type", String)
], AdditionalInformationEntity.prototype, "provincia", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'id_canton',
        type: 'int',
        comment: 'id_canton',
    }),
    __metadata("design:type", Number)
], AdditionalInformationEntity.prototype, "id_canton", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'canton',
        type: 'varchar',
        comment: 'canton',
    }),
    __metadata("design:type", String)
], AdditionalInformationEntity.prototype, "canton", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'id_parroquia',
        type: 'int',
        comment: 'id_parroquia',
    }),
    __metadata("design:type", Number)
], AdditionalInformationEntity.prototype, "idParroquia", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'parroquia',
        type: 'varchar',
        nullable: true,
        comment: 'parroquia',
    }),
    __metadata("design:type", String)
], AdditionalInformationEntity.prototype, "parroquia", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'barrio',
        type: 'varchar',
        nullable: true,
        comment: 'barrio',
    }),
    __metadata("design:type", String)
], AdditionalInformationEntity.prototype, "barrio", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'calle_principal',
        type: 'varchar',
        nullable: true,
        comment: 'calle_principal',
    }),
    __metadata("design:type", String)
], AdditionalInformationEntity.prototype, "callePrincipal", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'calle_secundaria',
        type: 'varchar',
        comment: 'calle_secundaria',
    }),
    __metadata("design:type", String)
], AdditionalInformationEntity.prototype, "calleSecundaria", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'telefono',
        type: 'varchar',
        comment: 'telefono',
    }),
    __metadata("design:type", String)
], AdditionalInformationEntity.prototype, "telefono", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'correo',
        type: 'varchar',
        comment: 'correo',
    }),
    __metadata("design:type", String)
], AdditionalInformationEntity.prototype, "correo", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'nombre_institucion',
        type: 'varchar',
        comment: 'nombre_institucion',
    }),
    __metadata("design:type", String)
], AdditionalInformationEntity.prototype, "nombreInstitucion", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'siglas',
        type: 'varchar',
        comment: 'siglas',
    }),
    __metadata("design:type", String)
], AdditionalInformationEntity.prototype, "siglas", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'nombre_actividad',
        type: 'varchar',
        comment: 'nombre_actividad',
    }),
    __metadata("design:type", String)
], AdditionalInformationEntity.prototype, "nombreActividad", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'tipo_cuenta',
        type: 'varchar',
        comment: 'tipo_cuenta',
    }),
    __metadata("design:type", String)
], AdditionalInformationEntity.prototype, "tipoCuenta", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'numero_cuenta',
        type: 'varchar',
        comment: 'numero_cuenta',
    }),
    __metadata("design:type", String)
], AdditionalInformationEntity.prototype, "numeroCuenta", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'nombre_corto',
        type: 'varchar',
        comment: 'nombre_corto',
    }),
    __metadata("design:type", String)
], AdditionalInformationEntity.prototype, "nombreCorto", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'nacionalidad',
        type: 'varchar',
        comment: 'nacionalidad',
    }),
    __metadata("design:type", String)
], AdditionalInformationEntity.prototype, "nacionalidad", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'consentimiento',
        type: 'varchar',
        comment: 'consentimiento',
    }),
    __metadata("design:type", String)
], AdditionalInformationEntity.prototype, "consentimiento", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'terminos_condiciones',
        type: 'varchar',
        comment: 'terminosCondiciones',
    }),
    __metadata("design:type", String)
], AdditionalInformationEntity.prototype, "terminosCondiciones", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'fecha_registro',
        type: 'timestamp',
        nullable: true,
        comment: 'fecha_registro',
    }),
    __metadata("design:type", Date)
], AdditionalInformationEntity.prototype, "fechaRegistro", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'fecha_modifica',
        type: 'timestamp',
        nullable: true,
        comment: 'fecha_modifica',
    }),
    __metadata("design:type", Date)
], AdditionalInformationEntity.prototype, "fechaModifica", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'cumple_edad',
        type: 'varchar',
        comment: 'art2_1_edad30a_64a_11m',
    }),
    __metadata("design:type", String)
], AdditionalInformationEntity.prototype, "cumpleEdad", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'cumple_provincia_residencia',
        type: 'varchar',
        comment: 'art2_2_provincia_residencia',
    }),
    __metadata("design:type", String)
], AdditionalInformationEntity.prototype, "cumpleProvinciaResidencia", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'cumple_afiliacion_iess',
        type: 'varchar',
        comment: 'art2_3_2_afiliacion_IESS',
    }),
    __metadata("design:type", String)
], AdditionalInformationEntity.prototype, "cumpleAfiliacionIess", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'cumple_tipo_afiliacion_iess',
        type: 'varchar',
        comment: 'art2_3_2_tipoafiliacionIESS',
    }),
    __metadata("design:type", String)
], AdditionalInformationEntity.prototype, "cumpleTipoAfiliacionIess", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'cumple_beneficios_transferencias_mies',
        type: 'varchar',
        comment: 'art2_4_beneficios_transferencias_MIES',
    }),
    __metadata("design:type", String)
], AdditionalInformationEntity.prototype, "cumpleBeneficiosTransferenciasMies", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'cumple_fecha_fallecimiento',
        type: 'varchar',
        comment: 'art2_5_fecha_fallecimiento',
    }),
    __metadata("design:type", String)
], AdditionalInformationEntity.prototype, "cumpleFechaFallecimiento", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'cumple_antecedentes_penales',
        type: 'varchar',
        comment: 'art2_6_antecedentes_penales',
    }),
    __metadata("design:type", String)
], AdditionalInformationEntity.prototype, "cumpleAntecedentesPenales", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'potencial_beneficiario',
        type: 'varchar',
        comment: 'potencial_beneficiario',
    }),
    __metadata("design:type", String)
], AdditionalInformationEntity.prototype, "potencialBeneficiario", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'fecha_corte',
        type: 'timestamp',
        nullable: true,
        comment: 'fecha_corte',
    }),
    __metadata("design:type", Date)
], AdditionalInformationEntity.prototype, "fechaCorte", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'numero_pago',
        type: 'varchar',
        nullable: true,
        comment: 'numero_pago',
    }),
    __metadata("design:type", String)
], AdditionalInformationEntity.prototype, "numeroPago", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'monto',
        type: 'varchar',
        nullable: true,
        comment: 'monto',
    }),
    __metadata("design:type", String)
], AdditionalInformationEntity.prototype, "monto", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'estado_opi',
        type: 'varchar',
        nullable: true,
        comment: 'estado_opi',
    }),
    __metadata("design:type", String)
], AdditionalInformationEntity.prototype, "estadoOpi", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'cambio_cuenta',
        type: 'boolean',
        default: false,
        comment: 'cambio_cuenta',
    }),
    __metadata("design:type", Boolean)
], AdditionalInformationEntity.prototype, "cambioCuenta", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'fecha_emision',
        type: 'varchar',
        nullable: true,
        comment: 'estado_opi',
    }),
    __metadata("design:type", String)
], AdditionalInformationEntity.prototype, "fechaEmision", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'fecha_expiracion',
        type: 'varchar',
        nullable: true,
        comment: 'estado_opi',
    }),
    __metadata("design:type", String)
], AdditionalInformationEntity.prototype, "fechaExpiracion", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'codigo_actividad',
        type: 'varchar',
        nullable: true,
        comment: 'codigo',
    }),
    __metadata("design:type", String)
], AdditionalInformationEntity.prototype, "codigoActividad", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'fecha_actualizacion_correo',
        type: 'timestamp',
        nullable: true,
        comment: 'ultima fecha de actualizacion del correo',
    }),
    __metadata("design:type", Date)
], AdditionalInformationEntity.prototype, "fechaActualizacionCorreo", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdditionalInformationEntity.prototype, "setCorreo", null);
exports.AdditionalInformationEntity = AdditionalInformationEntity = __decorate([
    (0, typeorm_1.Entity)('additional_information', { schema: 'auth' })
], AdditionalInformationEntity);
//# sourceMappingURL=additional-information.entity.js.map