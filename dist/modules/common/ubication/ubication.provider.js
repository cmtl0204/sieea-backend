"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ubicationProvider = void 0;
const enums_1 = require("../../../shared/enums");
const province_entity_1 = require("./province.entity");
exports.ubicationProvider = {
    provide: enums_1.CommonRepositoryEnum.DPA_REPOSITORY,
    useFactory: (dataSource) => dataSource.getRepository(province_entity_1.ProvinceEntity),
    inject: [enums_1.ConfigEnum.PG_DATA_SOURCE],
};
//# sourceMappingURL=ubication.provider.js.map