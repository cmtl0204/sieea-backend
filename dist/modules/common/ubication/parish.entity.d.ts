import { CantonEntity } from '@modules/common/ubication/canton.entity';
export declare class ParishEntity {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    province: CantonEntity;
    cantonId: number;
    name: string;
    provinceCode: number;
    cantonCode: number;
    parishCode: number;
    enabled: boolean;
}
