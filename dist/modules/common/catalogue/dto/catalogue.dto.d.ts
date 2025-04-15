import { CatalogueStateEnum, CatalogueTypeEnum } from '@shared/enums';
export declare class CatalogueDto {
    readonly code: string;
    readonly description: string;
    readonly name: string;
    readonly sort: number;
    readonly state: CatalogueStateEnum;
    readonly type: CatalogueTypeEnum;
}
