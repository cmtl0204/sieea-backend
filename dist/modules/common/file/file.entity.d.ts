import { CatalogueEntity } from '@modules/common/catalogue/catalogue.entity';
export declare class FileEntity {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    isVisible: boolean;
    modelId: string;
    type: CatalogueEntity;
    typeId: string;
    description: string;
    extension: string;
    fileName: string;
    originalName: string;
    path: string;
    size: number;
}
