import { DataSource } from 'typeorm';
import { ConfigEnum, CommonRepositoryEnum } from '@shared/enums';
import { FileEntity } from './file.entity';
export declare const fileProviders: {
    provide: CommonRepositoryEnum;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<FileEntity>;
    inject: ConfigEnum[];
}[];
