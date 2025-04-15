"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catalogueProvider = void 0;
const enums_1 = require("../../../shared/enums");
const catalogue_entity_1 = require("./catalogue.entity");
exports.catalogueProvider = {
    provide: enums_1.CommonRepositoryEnum.CATALOGUE_REPOSITORY,
    useFactory: (dataSource) => dataSource.getRepository(catalogue_entity_1.CatalogueEntity),
    inject: [enums_1.ConfigEnum.PG_DATA_SOURCE],
};
//# sourceMappingURL=catalogue.provider.js.map