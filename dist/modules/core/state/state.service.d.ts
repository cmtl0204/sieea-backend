import { LoggerService } from '@nestjs/common';
import { Repository } from 'typeorm';
import { StateEntity } from '@modules/core/state/state.entity';
import { UserEntity } from '@auth/entities';
export declare class StateService {
    private repository;
    private userRepository;
    private readonly logger;
    constructor(repository: Repository<StateEntity>, userRepository: Repository<UserEntity>, logger: LoggerService);
    findStatesByIdentification(identification: string): Promise<StateEntity[]>;
    readExcel(file: Express.Multer.File): Promise<any>;
    createCommentary(identification: string, payload: any): Promise<StateEntity>;
    createReview(identification: string): Promise<StateEntity>;
}
