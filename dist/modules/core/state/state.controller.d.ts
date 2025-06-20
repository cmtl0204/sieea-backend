import { ResponseHttpModel } from '@shared/interfaces';
import { StateService } from '@modules/core/state/state.service';
export declare class StateController {
    private service;
    constructor(service: StateService);
    findActivitiesByAdditionalInformation(additionalInformationId: string): Promise<ResponseHttpModel>;
    leerExcel(file: Express.Multer.File): Promise<any[]>;
}
