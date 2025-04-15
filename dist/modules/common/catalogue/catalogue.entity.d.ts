export declare class CatalogueEntity {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    isVisible: boolean;
    children: CatalogueEntity[];
    parent: CatalogueEntity;
    parentId: string;
    code: string;
    description: string;
    name: string;
    required: boolean;
    sort: number;
    type: string;
}
