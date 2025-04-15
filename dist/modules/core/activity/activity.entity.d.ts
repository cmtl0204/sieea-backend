import { AdditionalInformationEntity } from '@auth/entities/additional-information.entity';
export declare class ActivityEntity {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    enabled: boolean;
    additionalInformation: AdditionalInformationEntity;
    additionalInformationId: string;
    code: string;
    description: string;
    label: string;
    name: string;
    completed: boolean;
    sort: number;
    category: string;
    registeredAt: Date;
}
