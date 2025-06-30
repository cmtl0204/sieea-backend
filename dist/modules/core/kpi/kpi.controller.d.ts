import { ResponseHttpModel } from '@shared/interfaces';
import { KpiService } from '@modules/core/kpi/kpi.service';
import { UserEntity } from '@auth/entities';
export declare class KpiController {
    private service;
    constructor(service: KpiService);
    review(user: UserEntity, payload: any): Promise<ResponseHttpModel>;
}
