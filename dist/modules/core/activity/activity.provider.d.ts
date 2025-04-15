import { DataSource } from 'typeorm';
import { ConfigEnum, CoreRepositoryEnum } from '@shared/enums';
import { ActivityEntity } from './activity.entity';
export declare const activityProvider: {
    provide: CoreRepositoryEnum;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<ActivityEntity>;
    inject: ConfigEnum[];
};
