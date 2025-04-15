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
exports.BaseMenuDto = void 0;
const class_validator_1 = require("class-validator");
const dto_validation_1 = require("../../../../shared/dto-validation");
const enums_1 = require("../../enums");
const entities_1 = require("../../entities");
class BaseMenuDto {
    parent;
    children;
    code;
    icon;
    isVisible;
    label;
    routerLink;
    sort;
    type;
}
exports.BaseMenuDto = BaseMenuDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", entities_1.MenuEntity)
], BaseMenuDto.prototype, "parent", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], BaseMenuDto.prototype, "children", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)((0, dto_validation_1.isNotEmptyValidationOptions)()),
    (0, class_validator_1.IsString)((0, dto_validation_1.isStringValidationOptions)()),
    __metadata("design:type", String)
], BaseMenuDto.prototype, "code", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)((0, dto_validation_1.isNotEmptyValidationOptions)()),
    (0, class_validator_1.IsString)((0, dto_validation_1.isStringValidationOptions)()),
    __metadata("design:type", String)
], BaseMenuDto.prototype, "icon", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)((0, dto_validation_1.isNotEmptyValidationOptions)()),
    (0, class_validator_1.IsBoolean)((0, dto_validation_1.isBooleanValidationOptions)()),
    __metadata("design:type", Boolean)
], BaseMenuDto.prototype, "isVisible", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)((0, dto_validation_1.isNotEmptyValidationOptions)()),
    (0, class_validator_1.IsString)((0, dto_validation_1.isStringValidationOptions)()),
    __metadata("design:type", String)
], BaseMenuDto.prototype, "label", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)((0, dto_validation_1.isStringValidationOptions)()),
    __metadata("design:type", String)
], BaseMenuDto.prototype, "routerLink", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], BaseMenuDto.prototype, "sort", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)((0, dto_validation_1.isNotEmptyValidationOptions)()),
    (0, class_validator_1.IsString)((0, dto_validation_1.isStringValidationOptions)()),
    __metadata("design:type", String)
], BaseMenuDto.prototype, "type", void 0);
//# sourceMappingURL=base-menu.dto.js.map