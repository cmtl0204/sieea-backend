import { UserEntity } from '@auth/entities';
export declare class AuditDto {
    readonly modelId: string;
    readonly user: UserEntity;
    readonly event: string;
    readonly ipAddress: string;
    readonly values: string;
    readonly url: string;
    readonly hostname: string;
}
