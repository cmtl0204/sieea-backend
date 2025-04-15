import { Repository } from 'typeorm';
import { CreateAuditDto, UpdateMenuDto } from '@auth/dto';
import { AuditEntity } from '@auth/entities';
import { ServiceResponseHttpModel } from '@shared/interfaces';
export declare class AuditsService {
    private repository;
    constructor(repository: Repository<AuditEntity>);
    create(payload: CreateAuditDto): Promise<AuditEntity>;
    update(id: string, payload: UpdateMenuDto): Promise<ServiceResponseHttpModel>;
}
