import { MenuTypeEnum } from '@auth/enums';
import { MenuEntity } from '@auth/entities';
export declare class BaseMenuDto {
    readonly parent: MenuEntity;
    readonly children: MenuEntity[];
    readonly code: string;
    readonly icon: string;
    readonly isVisible: boolean;
    readonly label: string;
    readonly routerLink: string;
    readonly sort: number;
    readonly type: MenuTypeEnum;
}
