import { UserEntity } from '@auth/entities';
export declare class AuditEntity {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    modelId: string;
    user: UserEntity;
    event: string;
    hostname: string;
    ipAddress: string;
    url: string;
    values: string;
}
