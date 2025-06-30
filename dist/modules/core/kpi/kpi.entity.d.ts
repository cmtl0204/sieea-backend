import { UserEntity } from '@auth/entities';
import { StateEntity } from '@modules/core/state/state.entity';
export declare class KpiEntity {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    enabled: boolean;
    user: UserEntity;
    userId: string;
    state: StateEntity;
    stateId: string;
    registeredAt: Date;
}
