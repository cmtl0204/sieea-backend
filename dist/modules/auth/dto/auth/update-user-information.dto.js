"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserInformationDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const dto_1 = require("..");
class UpdateUserInformationDto extends (0, swagger_1.PickType)(dto_1.UserDto, [
    'email',
    'phone',
    'username',
]) {
}
exports.UpdateUserInformationDto = UpdateUserInformationDto;
//# sourceMappingURL=update-user-information.dto.js.map