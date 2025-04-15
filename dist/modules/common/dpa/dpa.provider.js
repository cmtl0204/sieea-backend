"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dpaProvider = void 0;
const enums_1 = require("../../../shared/enums");
const dpa_entity_1 = require("./dpa.entity");
exports.dpaProvider = {
    provide: enums_1.CommonRepositoryEnum.DPA_REPOSITORY,
    useFactory: (dataSource) => dataSource.getRepository(dpa_entity_1.DpaEntity),
    inject: [enums_1.ConfigEnum.PG_DATA_SOURCE],
};
//# sourceMappingURL=dpa.provider.js.map