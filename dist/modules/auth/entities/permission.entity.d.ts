import { RoleEntity } from '@auth/entities';
export declare class PermissionEntity {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    isVisible: boolean;
    roles: RoleEntity[];
    name: string;
}
