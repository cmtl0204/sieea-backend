"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const dto_1 = require("..");
class CreateUserDto extends (0, swagger_1.PickType)(dto_1.UserDto, [
    'email',
    'identificationType',
    'identification',
    'lastname',
    'name',
    'password',
    'passwordChanged',
    'roles',
    'username',
]) {
}
exports.CreateUserDto = CreateUserDto;
//# sourceMappingURL=create-user.dto.js.map