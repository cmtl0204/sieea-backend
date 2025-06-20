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
exports.ActivityDto = void 0;
const class_validator_1 = require("class-validator");
const enums_1 = require("../../../../shared/enums");
const dto_validation_1 = require("../../../../shared/dto-validation");
class ActivityDto {
    code;
    description;
    name;
    sort;
    state;
    type;
}
exports.ActivityDto = ActivityDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)((0, dto_validation_1.isNotEmptyValidationOptions)()),
    (0, class_validator_1.IsString)((0, dto_validation_1.isStringValidationOptions)()),
    __metadata("design:type", String)
], ActivityDto.prototype, "code", void 0);
__decorate([
    (0, class_validator_1.IsString)((0, dto_validation_1.isStringValidationOptions)()),
    (0, class_validator_1.MinLength)(5, (0, dto_validation_1.minLengthValidationOptions)()),
    __metadata("design:type", String)
], ActivityDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsString)((0, dto_validation_1.isStringValidationOptions)()),
    __metadata("design:type", String)
], ActivityDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, (0, dto_validation_1.isNumberValidationOptions)()),
    __metadata("design:type", Number)
], ActivityDto.prototype, "sort", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(enums_1.CatalogueStateEnum, (0, dto_validation_1.isEnumValidationOptions)()),
    __metadata("design:type", String)
], ActivityDto.prototype, "state", void 0);
__decorate([
    (0, class_validator_1.IsString)((0, dto_validation_1.isStringValidationOptions)()),
    __metadata("design:type", String)
], ActivityDto.prototype, "type", void 0);
//# sourceMappingURL=activity.dto.js.map