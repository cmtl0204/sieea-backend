"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeedUserDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const dto_1 = require("..");
class SeedUserDto extends (0, swagger_1.PickType)(dto_1.UserDto, [
    'birthdate',
    'careers',
    'identificationType',
    'cellPhone',
    'identification',
    'email',
    'lastname',
    'name',
    'password',
    'passwordChanged',
    'personalEmail',
    'roles',
    'username',
]) {
}
exports.SeedUserDto = SeedUserDto;
//# sourceMappingURL=seed-user.dto.js.map