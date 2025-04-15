"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeederMenuDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const dto_1 = require("..");
class SeederMenuDto extends (0, swagger_1.PickType)(dto_1.BaseMenuDto, [
    'code',
    'icon',
    'isVisible',
    'label',
    'sort',
    'type',
]) {
}
exports.SeederMenuDto = SeederMenuDto;
//# sourceMappingURL=seeder-menu.dto.js.map