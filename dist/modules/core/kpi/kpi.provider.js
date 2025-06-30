"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kpiProvider = void 0;
const enums_1 = require("../../../shared/enums");
const kpi_entity_1 = require("./kpi.entity");
exports.kpiProvider = {
    provide: enums_1.CoreRepositoryEnum.STATE_REPOSITORY,
    useFactory: (dataSource) => dataSource.getRepository(kpi_entity_1.KpiEntity),
    inject: [enums_1.ConfigEnum.PG_DATA_SOURCE],
};
//# sourceMappingURL=kpi.provider.js.map