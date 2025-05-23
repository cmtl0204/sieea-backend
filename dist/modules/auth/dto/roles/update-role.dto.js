"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRoleDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const role_dto_1 = require("./role.dto");
class UpdateRoleDto extends (0, swagger_1.PartialType)(role_dto_1.RoleDto) {
}
exports.UpdateRoleDto = UpdateRoleDto;
//# sourceMappingURL=update-role.dto.js.map