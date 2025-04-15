import { DataSource } from 'typeorm';
import { MenuEntity, TransactionalCodeEntity, PermissionEntity, RoleEntity, UserEntity, AuditEntity } from '@auth/entities';
import { ConfigEnum, AuthRepositoryEnum } from '@shared/enums';
import { AddressEntity } from '@auth/entities/address.entity';
import { AdditionalInformationEntity } from '@auth/entities/additional-information.entity';
export declare const authProviders: ({
    provide: AuthRepositoryEnum;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<AuditEntity>;
    inject: ConfigEnum[];
} | {
    provide: AuthRepositoryEnum;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<MenuEntity>;
    inject: ConfigEnum[];
} | {
    provide: AuthRepositoryEnum;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<PermissionEntity>;
    inject: ConfigEnum[];
} | {
    provide: AuthRepositoryEnum;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<RoleEntity>;
    inject: ConfigEnum[];
} | {
    provide: AuthRepositoryEnum;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<UserEntity>;
    inject: ConfigEnum[];
} | {
    provide: AuthRepositoryEnum;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<TransactionalCodeEntity>;
    inject: ConfigEnum[];
} | {
    provide: AuthRepositoryEnum;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<AddressEntity>;
    inject: ConfigEnum[];
} | {
    provide: AuthRepositoryEnum;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<AdditionalInformationEntity>;
    inject: ConfigEnum[];
})[];
