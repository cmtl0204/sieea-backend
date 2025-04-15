import { DataSource } from 'typeorm';
import { CommonRepositoryEnum, ConfigEnum } from '@shared/enums';
import { ProvinceEntity } from './province.entity';
export declare const ubicationProvider: {
    provide: CommonRepositoryEnum;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<ProvinceEntity>;
    inject: ConfigEnum[];
};
