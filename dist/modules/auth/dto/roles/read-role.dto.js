"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadRoleDto = void 0;
const role_dto_1 = require("./role.dto");
const swagger_1 = require("@nestjs/swagger");
class ReadRoleDto extends (0, swagger_1.PickType)(role_dto_1.RoleDto, ['code', 'name']) {
}
exports.ReadRoleDto = ReadRoleDto;
//# sourceMappingURL=read-role.dto.js.map