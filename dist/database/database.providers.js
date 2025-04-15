"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const typeorm_1 = require("typeorm");
const enums_1 = require("../shared/enums");
const _config_1 = require("../config");
exports.databaseProviders = [
    {
        provide: enums_1.ConfigEnum.PG_DATA_SOURCE,
        inject: [_config_1.config.KEY],
        useFactory: async (configService) => {
            const { username, host, database, password, port } = configService.database;
            const dataSource = new typeorm_1.DataSource({
                type: 'postgres',
                host,
                port,
                username,
                password,
                database,
                entities: [__dirname + '/../**/*.entity{.ts,.js}'],
                migrations: ['src/database/migrations/*.ts'],
                migrationsTableName: 'migrations',
                synchronize: true,
            });
            return dataSource.initialize();
        },
    },
];
//# sourceMappingURL=database.providers.js.map