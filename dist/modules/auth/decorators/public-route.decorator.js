"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicRoute = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../constants");
const PublicRoute = () => (0, common_1.SetMetadata)(constants_1.IS_PUBLIC_ROUTE_KEY, true);
exports.PublicRoute = PublicRoute;
//# sourceMappingURL=public-route.decorator.js.map