"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadProfileDto = void 0;
const class_transformer_1 = require("class-transformer");
const dto_1 = require("..");
const swagger_1 = require("@nestjs/swagger");
let ReadProfileDto = class ReadProfileDto extends (0, swagger_1.PickType)(dto_1.UserDto, [
    'bloodType',
    'ethnicOrigin',
    'identificationType',
    'gender',
    'maritalStatus',
    'sex',
]) {
};
exports.ReadProfileDto = ReadProfileDto;
exports.ReadProfileDto = ReadProfileDto = __decorate([
    (0, class_transformer_1.Exclude)()
], ReadProfileDto);
//# sourceMappingURL=read-profile.dto.js.map