import { MenuEntity, PermissionEntity, UserEntity } from '@auth/entities';
export declare class RoleEntity {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    isVisible: boolean;
    users: UserEntity[];
    menus: MenuEntity[];
    permissions: PermissionEntity[];
    code: string;
    name: string;
    setCode(): Promise<void>;
}
