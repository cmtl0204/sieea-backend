"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = Auth;
const common_1 = require("@nestjs/common");
const guards_1 = require("../guards");
const swagger_1 = require("@nestjs/swagger");
function Auth(...roles) {
    return (0, common_1.applyDecorators)((0, common_1.UseGuards)(guards_1.JwtGuard, guards_1.RolesGuard), (0, swagger_1.ApiBearerAuth)());
}
//# sourceMappingURL=auth.decorator.js.map