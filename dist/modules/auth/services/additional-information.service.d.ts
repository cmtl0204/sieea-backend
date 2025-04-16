import { Repository } from 'typeorm';
import { AdditionalInformationEntity } from '@auth/entities/additional-information.entity';
export declare class AdditionalInformationService {
    private additionalInformationRepository;
    constructor(additionalInformationRepository: Repository<AdditionalInformationEntity>);
    readExcel(file: Express.Multer.File): Promise<any[]>;
}
