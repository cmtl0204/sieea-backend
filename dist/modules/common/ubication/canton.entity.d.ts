import { ProvinceEntity } from '@modules/common/ubication/province.entity';
export declare class CantonEntity {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    province: ProvinceEntity;
    provinceId: number;
    name: string;
    provinceCode: number;
    cantonCode: number;
    enabled: boolean;
}
