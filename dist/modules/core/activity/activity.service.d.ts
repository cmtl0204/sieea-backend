import { Repository } from 'typeorm';
import { ServiceResponseHttpModel } from '@shared/interfaces';
import { ActivityEntity } from '@modules/core/activity/activity.entity';
import { FilterActivityDto, UpdateActivityDto } from '@modules/core/activity/dto';
import { AdditionalInformationEntity } from '@auth/entities/additional-information.entity';
export declare class ActivityService {
    private repository;
    private readonly additionalInformationRepository;
    clientRedis: any;
    constructor(repository: Repository<ActivityEntity>, additionalInformationRepository: Repository<AdditionalInformationEntity>);
    findAll(params?: FilterActivityDto): Promise<ServiceResponseHttpModel>;
    findOne(id: string): Promise<ActivityEntity>;
    update(id: string, payload: UpdateActivityDto): Promise<ActivityEntity>;
    remove(id: string): Promise<ActivityEntity>;
    private paginateAndFilter;
    findActivitiesByAdditionalInformation(additionalInformationId: string): Promise<ActivityEntity[]>;
    create(additionalInformationId: string, payload: any): Promise<{
        data: null;
    }>;
}
