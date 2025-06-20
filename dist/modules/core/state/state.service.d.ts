import { Repository } from 'typeorm';
import { StateEntity } from '@modules/core/state/state.entity';
export declare class StateService {
    private repository;
    constructor(repository: Repository<StateEntity>);
    findStatesByAdditionalInformation(additionalInformationId: string): Promise<StateEntity | null>;
    readExcel(file: Express.Multer.File): Promise<any[]>;
}
