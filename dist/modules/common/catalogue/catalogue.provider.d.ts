import { DataSource } from 'typeorm';
import { CommonRepositoryEnum, ConfigEnum } from '@shared/enums';
import { CatalogueEntity } from './catalogue.entity';
export declare const catalogueProvider: {
    provide: CommonRepositoryEnum;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<CatalogueEntity>;
    inject: ConfigEnum[];
};
