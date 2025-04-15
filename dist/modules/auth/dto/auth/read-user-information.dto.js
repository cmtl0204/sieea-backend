"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadUserInformationDto = void 0;
const dto_1 = require("..");
const swagger_1 = require("@nestjs/swagger");
class ReadUserInformationDto extends (0, swagger_1.PickType)(dto_1.UserDto, [
    'email',
    'emailVerifiedAt',
    'phone',
    'username',
]) {
}
exports.ReadUserInformationDto = ReadUserInformationDto;
//# sourceMappingURL=read-user-information.dto.js.map