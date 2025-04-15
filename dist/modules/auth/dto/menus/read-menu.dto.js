"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadMenuDto = void 0;
const dto_1 = require("..");
const swagger_1 = require("@nestjs/swagger");
class ReadMenuDto extends (0, swagger_1.PickType)(dto_1.BaseMenuDto, [
    'icon',
    'isVisible',
    'label',
    'routerLink',
    'type',
]) {
}
exports.ReadMenuDto = ReadMenuDto;
//# sourceMappingURL=read-menu.dto.js.map