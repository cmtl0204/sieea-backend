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
exports.UserDto = void 0;
const class_validator_1 = require("class-validator");
const dto_validation_1 = require("../../../../shared/dto-validation");
const catalogue_entity_1 = require("../../../common/catalogue/catalogue.entity");
class UserDto {
    careers;
    bloodType;
    ethnicOrigin;
    identificationType;
    gender;
    maritalStatus;
    sex;
    avatar;
    birthdate;
    cellPhone;
    identification;
    email;
    emailVerifiedAt;
    lastname;
    password;
    passwordChanged;
    personalEmail;
    phone;
    name;
    roles;
    username;
}
exports.UserDto = UserDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], UserDto.prototype, "careers", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", catalogue_entity_1.CatalogueEntity)
], UserDto.prototype, "bloodType", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", catalogue_entity_1.CatalogueEntity)
], UserDto.prototype, "ethnicOrigin", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", catalogue_entity_1.CatalogueEntity)
], UserDto.prototype, "identificationType", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", catalogue_entity_1.CatalogueEntity)
], UserDto.prototype, "gender", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", catalogue_entity_1.CatalogueEntity)
], UserDto.prototype, "maritalStatus", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", catalogue_entity_1.CatalogueEntity)
], UserDto.prototype, "sex", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UserDto.prototype, "avatar", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)((0, dto_validation_1.isNotEmptyValidationOptions)()),
    __metadata("design:type", Date)
], UserDto.prototype, "birthdate", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(10, (0, dto_validation_1.maxLengthValidationOptions)()),
    __metadata("design:type", String)
], UserDto.prototype, "cellPhone", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)((0, dto_validation_1.isNotEmptyValidationOptions)()),
    (0, class_validator_1.IsString)((0, dto_validation_1.isStringValidationOptions)()),
    __metadata("design:type", String)
], UserDto.prototype, "identification", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)((0, dto_validation_1.isNotEmptyValidationOptions)()),
    (0, class_validator_1.IsEmail)({}, (0, dto_validation_1.isEmailValidationOptions)()),
    (0, class_validator_1.MaxLength)(150, (0, dto_validation_1.maxLengthValidationOptions)()),
    __metadata("design:type", String)
], UserDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)((0, dto_validation_1.isNotEmptyValidationOptions)()),
    (0, class_validator_1.IsEmail)({}, (0, dto_validation_1.isEmailValidationOptions)()),
    (0, class_validator_1.MaxLength)(150, (0, dto_validation_1.maxLengthValidationOptions)()),
    __metadata("design:type", Date)
], UserDto.prototype, "emailVerifiedAt", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)((0, dto_validation_1.isNotEmptyValidationOptions)()),
    (0, class_validator_1.IsString)((0, dto_validation_1.isStringValidationOptions)()),
    __metadata("design:type", String)
], UserDto.prototype, "lastname", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)((0, dto_validation_1.isNotEmptyValidationOptions)()),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(8, (0, dto_validation_1.minLengthValidationOptions)()),
    (0, class_validator_1.MaxLength)(32, (0, dto_validation_1.minLengthValidationOptions)()),
    __metadata("design:type", String)
], UserDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)((0, dto_validation_1.isBooleanValidationOptions)()),
    __metadata("design:type", Boolean)
], UserDto.prototype, "passwordChanged", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)({}, (0, dto_validation_1.isEmailValidationOptions)()),
    (0, class_validator_1.MaxLength)(150, (0, dto_validation_1.maxLengthValidationOptions)()),
    __metadata("design:type", String)
], UserDto.prototype, "personalEmail", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(20, (0, dto_validation_1.minLengthValidationOptions)()),
    __metadata("design:type", String)
], UserDto.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)((0, dto_validation_1.isNotEmptyValidationOptions)()),
    (0, class_validator_1.IsString)((0, dto_validation_1.isStringValidationOptions)()),
    __metadata("design:type", String)
], UserDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)((0, dto_validation_1.isNotEmptyValidationOptions)()),
    __metadata("design:type", Object)
], UserDto.prototype, "roles", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)((0, dto_validation_1.isNotEmptyValidationOptions)()),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(5, (0, dto_validation_1.minLengthValidationOptions)()),
    (0, class_validator_1.MaxLength)(100, (0, dto_validation_1.maxLengthValidationOptions)()),
    __metadata("design:type", String)
], UserDto.prototype, "username", void 0);
//# sourceMappingURL=user.dto.js.map