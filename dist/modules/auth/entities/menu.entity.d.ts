import { RoleEntity } from '@auth/entities';
export declare class MenuEntity {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    isVisible: boolean;
    parent: MenuEntity;
    children: MenuEntity[];
    roles: RoleEntity[];
    code: string;
    icon: string;
    label: string;
    sort: number;
    routerLink: string;
    type: string;
    setCode(): Promise<void>;
}
