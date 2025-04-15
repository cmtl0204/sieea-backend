"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileProviders = void 0;
const enums_1 = require("../../../shared/enums");
const file_entity_1 = require("./file.entity");
exports.fileProviders = [
    {
        provide: enums_1.CommonRepositoryEnum.FILE_REPOSITORY,
        useFactory: (dataSource) => dataSource.getRepository(file_entity_1.FileEntity),
        inject: [enums_1.ConfigEnum.PG_DATA_SOURCE],
    },
];
//# sourceMappingURL=file.providers.js.map