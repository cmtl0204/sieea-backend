import { ResponseHttpModel } from '@shared/interfaces';
import { UpdateCatalogueDto } from '@modules/common/catalogue/dto';
import { ActivityService } from '@modules/core/activity/activity.service';
export declare class ActivityController {
    private activityService;
    constructor(activityService: ActivityService);
    findActivitiesByAdditionalInformation(additionalInformationId: string): Promise<ResponseHttpModel>;
    create(additionalInformationId: string, payload: any): Promise<ResponseHttpModel>;
    findOne(id: string): Promise<ResponseHttpModel>;
    update(id: string, payload: UpdateCatalogueDto): Promise<ResponseHttpModel>;
    remove(id: string): Promise<ResponseHttpModel>;
}
