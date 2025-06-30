import { DataSource } from 'typeorm';
import { ConfigEnum, CoreRepositoryEnum } from '@shared/enums';
import { KpiEntity } from './kpi.entity';
export declare const kpiProvider: {
    provide: CoreRepositoryEnum;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<KpiEntity>;
    inject: ConfigEnum[];
};
