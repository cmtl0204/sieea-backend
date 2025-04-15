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
exports.UserEntity = void 0;
const typeorm_1 = require("typeorm");
const Bcrypt = require("bcrypt");
const entities_1 = require("./");
const catalogue_entity_1 = require("../../common/catalogue/catalogue.entity");
const address_entity_1 = require("./address.entity");
const additional_information_entity_1 = require("./additional-information.entity");
let UserEntity = class UserEntity {
    id;
    createdAt;
    updatedAt;
    deletedAt;
    roles;
    address;
    additionalInformation;
    bloodType;
    bloodTypeId;
    ethnicOrigin;
    ethnicOriginId;
    gender;
    genderId;
    identificationType;
    identificationTypeId;
    maritalStatus;
    maritalStatusId;
    nationality;
    nationalityId;
    sex;
    sexId;
    activatedAt;
    avatar;
    cellPhone;
    email;
    birthdate;
    emailVerifiedAt;
    identification;
    lastname;
    password;
    passwordChanged;
    personalEmail;
    phone;
    maxAttempts;
    name;
    suspendedAt;
    username;
    termsConditions;
    hashPassword() {
        if (!this.password || this.password?.length > 30) {
            return;
        }
        this.password = Bcrypt.hashSync(this.password, 10);
    }
    checkBirthdate() {
        if (!this.birthdate) {
            return;
        }
    }
    setEmail() {
        if (!this.email) {
            return;
        }
        this.email = this.email.toLowerCase().trim();
    }
    setPersonalEmail() {
        if (!this.personalEmail) {
            return;
        }
        this.personalEmail = this.personalEmail.toLowerCase().trim();
    }
    audit() {
        console.log(this);
    }
};
exports.UserEntity = UserEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], UserEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        name: 'created_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], UserEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        name: 'updated_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], UserEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({
        name: 'deleted_at',
        type: 'timestamp',
        nullable: true,
    }),
    __metadata("design:type", Date)
], UserEntity.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => entities_1.RoleEntity, (role) => role.users),
    __metadata("design:type", Array)
], UserEntity.prototype, "roles", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => address_entity_1.AddressEntity, (address) => address.user),
    __metadata("design:type", address_entity_1.AddressEntity)
], UserEntity.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => additional_information_entity_1.AdditionalInformationEntity, (additionalInformation) => additionalInformation.user),
    __metadata("design:type", additional_information_entity_1.AdditionalInformationEntity)
], UserEntity.prototype, "additionalInformation", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => catalogue_entity_1.CatalogueEntity, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'blood_type_id' }),
    __metadata("design:type", catalogue_entity_1.CatalogueEntity)
], UserEntity.prototype, "bloodType", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'uuid',
        name: 'blood_type_id',
        nullable: true,
        comment: 'A+, A-, B+, B-, AB+ AB-, O+, O-',
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "bloodTypeId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => catalogue_entity_1.CatalogueEntity, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'ethnic_origin_id' }),
    __metadata("design:type", catalogue_entity_1.CatalogueEntity)
], UserEntity.prototype, "ethnicOrigin", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'uuid',
        name: 'ethnic_origin_id',
        nullable: true,
        comment: 'Blanco, Mestizo, Indigena, Afroecuatoriano, Montubio',
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "ethnicOriginId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => catalogue_entity_1.CatalogueEntity, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'gender_id' }),
    __metadata("design:type", catalogue_entity_1.CatalogueEntity)
], UserEntity.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'uuid',
        name: 'gender_id',
        nullable: true,
        comment: 'Masculino, Femenino, LGBTI, Otro',
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "genderId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => catalogue_entity_1.CatalogueEntity, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'identification_type_id' }),
    __metadata("design:type", catalogue_entity_1.CatalogueEntity)
], UserEntity.prototype, "identificationType", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'uuid',
        name: 'identification_type_id',
        nullable: true,
        comment: 'Cédula o Pasaporte',
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "identificationTypeId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => catalogue_entity_1.CatalogueEntity, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'marital_status_id' }),
    __metadata("design:type", catalogue_entity_1.CatalogueEntity)
], UserEntity.prototype, "maritalStatus", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'uuid',
        name: 'marital_status_id',
        nullable: true,
        comment: 'Soltero, Casado, Viudo, Divorciado, Union Libre, Separado no legal',
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "maritalStatusId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => catalogue_entity_1.CatalogueEntity, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'nationality_id' }),
    __metadata("design:type", catalogue_entity_1.CatalogueEntity)
], UserEntity.prototype, "nationality", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'uuid',
        name: 'nationality_id',
        nullable: true,
        comment: 'Ecuatoriana, Argentina etc',
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "nationalityId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => catalogue_entity_1.CatalogueEntity, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'sex_id' }),
    __metadata("design:type", catalogue_entity_1.CatalogueEntity)
], UserEntity.prototype, "sex", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'uuid',
        name: 'sex_id',
        nullable: true,
        comment: 'Hombre o Mujer',
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "sexId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'activated_at',
        type: 'timestamp',
        nullable: true,
        comment: 'Fecha de ultimo login',
    }),
    __metadata("design:type", Date)
], UserEntity.prototype, "activatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'avatar',
        type: 'varchar',
        unique: true,
        nullable: true,
        comment: 'Imagen del Avatar del usuario',
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "avatar", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'cell_phone',
        type: 'varchar',
        nullable: true,
        comment: 'Teléfono Celular',
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "cellPhone", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'email',
        type: 'varchar',
        nullable: true,
        comment: 'Correo Electronico',
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'birthdate',
        type: 'date',
        nullable: true,
        comment: 'Fecha de nacimiento',
    }),
    __metadata("design:type", Date)
], UserEntity.prototype, "birthdate", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'email_verified_at',
        type: 'timestamp',
        nullable: true,
        comment: 'Verificacion de correo',
    }),
    __metadata("design:type", Date)
], UserEntity.prototype, "emailVerifiedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'identification',
        type: 'varchar',
        unique: true,
        nullable: true,
        comment: 'Numero de documento puede ser la cedula',
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "identification", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'lastname',
        type: 'varchar',
        nullable: true,
        comment: 'Apellidos',
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "lastname", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'password',
        type: 'varchar',
        comment: 'Contraseña',
        select: false,
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'password_changed',
        type: 'boolean',
        default: false,
        comment: 'true: ya cambió la contraseña y False:no',
    }),
    __metadata("design:type", Boolean)
], UserEntity.prototype, "passwordChanged", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'personal_email',
        type: 'varchar',
        nullable: true,
        comment: 'Correo Electronico Personal',
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "personalEmail", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'phone',
        type: 'varchar',
        nullable: true,
        comment: 'Teléfono',
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'max_attempts',
        type: 'int',
        default: 3,
        comment: 'Intentos máximos para errar la contraseña, si llega a cero el usuario se bloquea',
    }),
    __metadata("design:type", Number)
], UserEntity.prototype, "maxAttempts", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'name',
        type: 'varchar',
        comment: 'Nombres del usuario',
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'suspended_at',
        type: 'timestamp',
        nullable: true,
        comment: 'Fecha de la ultima suspension del usuario',
    }),
    __metadata("design:type", Object)
], UserEntity.prototype, "suspendedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'username',
        type: 'varchar',
        comment: 'Nombre de usuario para ingreso al sistema',
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'terms_conditions',
        type: 'boolean',
        default: false,
        comment: 'Terminos y condiciones',
    }),
    __metadata("design:type", Boolean)
], UserEntity.prototype, "termsConditions", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserEntity.prototype, "hashPassword", null);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserEntity.prototype, "checkBirthdate", null);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserEntity.prototype, "setEmail", null);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserEntity.prototype, "setPersonalEmail", null);
__decorate([
    (0, typeorm_1.AfterInsert)(),
    (0, typeorm_1.AfterUpdate)(),
    (0, typeorm_1.AfterRemove)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserEntity.prototype, "audit", null);
exports.UserEntity = UserEntity = __decorate([
    (0, typeorm_1.Entity)('users', { schema: 'auth' })
], UserEntity);
//# sourceMappingURL=user.entity.js.map