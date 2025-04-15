"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRoleDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const role_dto_1 = require("./role.dto");
class CreateRoleDto extends (0, swagger_1.PickType)(role_dto_1.RoleDto, ['code', 'name']) {
}
exports.CreateRoleDto = CreateRoleDto;
//# sourceMappingURL=create-role.dto.js.map