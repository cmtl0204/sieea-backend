export declare class DpaEntity {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    isVisible: boolean;
    children: DpaEntity[];
    parent: DpaEntity;
    parentId: string;
    code: string;
    description: string;
    name: string;
    required: boolean;
    sort: number;
    type: string;
}
