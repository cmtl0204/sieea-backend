import { DpaEntity } from '@modules/common/dpa/dpa.entity';
import { UserEntity } from '@auth/entities/user.entity';
export declare class AddressEntity {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    user: UserEntity;
    userId: string;
    province: DpaEntity;
    provinceId: number;
    canton: DpaEntity;
    cantonId: number;
    parish: DpaEntity;
    parishId: number;
    neighborhood: string;
    mainStreet: string;
    secondaryStreet: string;
}
