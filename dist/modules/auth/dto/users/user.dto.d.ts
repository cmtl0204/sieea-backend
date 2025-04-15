import { CatalogueEntity } from '@modules/common/catalogue/catalogue.entity';
export declare class UserDto {
    readonly careers: any;
    readonly bloodType: CatalogueEntity;
    readonly ethnicOrigin: CatalogueEntity;
    readonly identificationType: CatalogueEntity;
    readonly gender: CatalogueEntity;
    readonly maritalStatus: CatalogueEntity;
    readonly sex: CatalogueEntity;
    readonly avatar: string;
    readonly birthdate: Date;
    readonly cellPhone: string;
    readonly identification: string;
    readonly email: string;
    readonly emailVerifiedAt: Date;
    readonly lastname: string;
    readonly password: string;
    readonly passwordChanged: boolean;
    readonly personalEmail: string;
    readonly phone: string;
    readonly name: string;
    readonly roles: any;
    readonly username: string;
}
