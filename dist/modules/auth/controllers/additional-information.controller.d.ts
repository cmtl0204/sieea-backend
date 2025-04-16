import { AdditionalInformationService } from '@auth/services/additional-information.service';
export declare class AdditionalInformationController {
    private additionalInformationService;
    constructor(additionalInformationService: AdditionalInformationService);
    leerExcel(file: Express.Multer.File): Promise<any[]>;
}
