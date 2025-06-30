import { Repository } from 'typeorm';
import { UserEntity } from '@auth/entities';
import { KpiEntity } from '@modules/core/kpi/kpi.entity';
export declare class KpiService {
    private repository;
    constructor(repository: Repository<KpiEntity>);
    create(user: UserEntity, payload: any): Promise<KpiEntity>;
}
