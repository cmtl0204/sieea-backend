"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activityProvider = void 0;
const enums_1 = require("../../../shared/enums");
const activity_entity_1 = require("./activity.entity");
exports.activityProvider = {
    provide: enums_1.CoreRepositoryEnum.ACTIVITY_REPOSITORY,
    useFactory: (dataSource) => dataSource.getRepository(activity_entity_1.ActivityEntity),
    inject: [enums_1.ConfigEnum.PG_DATA_SOURCE],
};
//# sourceMappingURL=activity.provider.js.map