"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stateProvider = void 0;
const enums_1 = require("../../../shared/enums");
const state_entity_1 = require("./state.entity");
exports.stateProvider = {
    provide: enums_1.CoreRepositoryEnum.STATE_REPOSITORY,
    useFactory: (dataSource) => dataSource.getRepository(state_entity_1.StateEntity),
    inject: [enums_1.ConfigEnum.PG_DATA_SOURCE],
};
//# sourceMappingURL=state.provider.js.map