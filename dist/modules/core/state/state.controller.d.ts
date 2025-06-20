import { ResponseHttpModel } from '@shared/interfaces';
import { StateService } from '@modules/core/state/state.service';
export declare class StateController {
    private service;
    constructor(service: StateService);
    findActivitiesByIdentification(identification: string): Promise<ResponseHttpModel>;
    createCommentary(identification: string, payload: any): Promise<ResponseHttpModel>;
    leerExcel(file: Express.Multer.File): Promise<any>;
}
