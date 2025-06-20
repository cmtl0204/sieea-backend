import { Repository } from 'typeorm';
import { StateEntity } from '@modules/core/state/state.entity';
export declare class StateService {
    private repository;
    constructor(repository: Repository<StateEntity>);
    findStatesByIdentification(identification: string): Promise<StateEntity[]>;
    readExcel(file: Express.Multer.File): Promise<any>;
    createCommentary(identification: string, payload: any): Promise<StateEntity>;
}
