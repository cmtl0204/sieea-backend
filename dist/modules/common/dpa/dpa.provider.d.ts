import { DataSource } from 'typeorm';
import { CommonRepositoryEnum, ConfigEnum } from '@shared/enums';
import { DpaEntity } from './dpa.entity';
export declare const dpaProvider: {
    provide: CommonRepositoryEnum;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<DpaEntity>;
    inject: ConfigEnum[];
};
