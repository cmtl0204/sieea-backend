"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authProviders = void 0;
const entities_1 = require("../entities");
const enums_1 = require("../../../shared/enums");
const address_entity_1 = require("../entities/address.entity");
const additional_information_entity_1 = require("../entities/additional-information.entity");
exports.authProviders = [
    {
        provide: enums_1.AuthRepositoryEnum.AUDIT_REPOSITORY,
        useFactory: (dataSource) => dataSource.getRepository(entities_1.AuditEntity),
        inject: [enums_1.ConfigEnum.PG_DATA_SOURCE],
    },
    {
        provide: enums_1.AuthRepositoryEnum.MENU_REPOSITORY,
        useFactory: (dataSource) => dataSource.getRepository(entities_1.MenuEntity),
        inject: [enums_1.ConfigEnum.PG_DATA_SOURCE],
    },
    {
        provide: enums_1.AuthRepositoryEnum.PERMISSION_REPOSITORY,
        useFactory: (dataSource) => dataSource.getRepository(entities_1.PermissionEntity),
        inject: [enums_1.ConfigEnum.PG_DATA_SOURCE],
    },
    {
        provide: enums_1.AuthRepositoryEnum.ROLE_REPOSITORY,
        useFactory: (dataSource) => dataSource.getRepository(entities_1.RoleEntity),
        inject: [enums_1.ConfigEnum.PG_DATA_SOURCE],
    },
    {
        provide: enums_1.AuthRepositoryEnum.USER_REPOSITORY,
        useFactory: (dataSource) => dataSource.getRepository(entities_1.UserEntity),
        inject: [enums_1.ConfigEnum.PG_DATA_SOURCE],
    },
    {
        provide: enums_1.AuthRepositoryEnum.TRANSACTIONAL_CODE_REPOSITORY,
        useFactory: (dataSource) => dataSource.getRepository(entities_1.TransactionalCodeEntity),
        inject: [enums_1.ConfigEnum.PG_DATA_SOURCE],
    },
    {
        provide: enums_1.AuthRepositoryEnum.ADDRESS_REPOSITORY,
        useFactory: (dataSource) => dataSource.getRepository(address_entity_1.AddressEntity),
        inject: [enums_1.ConfigEnum.PG_DATA_SOURCE],
    },
    {
        provide: enums_1.AuthRepositoryEnum.ADDITIONAL_INFORMATION_REPOSITORY,
        useFactory: (dataSource) => dataSource.getRepository(additional_information_entity_1.AdditionalInformationEntity),
        inject: [enums_1.ConfigEnum.PG_DATA_SOURCE],
    },
];
//# sourceMappingURL=auth.providers.js.map