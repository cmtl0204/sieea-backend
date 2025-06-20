import { DataSource } from 'typeorm';
import { ConfigEnum, CoreRepositoryEnum } from '@shared/enums';
import { StateEntity } from './state.entity';
export declare const stateProvider: {
    provide: CoreRepositoryEnum;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<StateEntity>;
    inject: ConfigEnum[];
};
