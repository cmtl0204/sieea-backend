import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { FindOptionsWhere, ILike, Repository } from 'typeorm';
import { AuthRepositoryEnum, CoreRepositoryEnum } from '@shared/enums';
import { ServiceResponseHttpModel } from '@shared/interfaces';
import { UserEntity } from '@auth/entities';
import { PaginationDto } from '@shared/dto';
import { plainToInstance } from 'class-transformer';
import { ReadUserDto } from '@auth/dto';
import { ActivityEntity } from '@modules/core/activity/activity.entity';
import {
  CreateActivityDto,
  FilterActivityDto,
  UpdateActivityDto,
} from '@modules/core/activity/dto';
import { AdditionalInformationEntity } from '@auth/entities/additional-information.entity';

@Injectable()
export class ActivityService {
  clientRedis: any = null;

  constructor(
    @Inject(CoreRepositoryEnum.ACTIVITY_REPOSITORY)
    private repository: Repository<ActivityEntity>,
    @Inject(AuthRepositoryEnum.ADDITIONAL_INFORMATION_REPOSITORY)
    private readonly additionalInformationRepository: Repository<AdditionalInformationEntity>,
  ) {}

  async findAll(params?: FilterActivityDto): Promise<ServiceResponseHttpModel> {
    //Pagination & Filter by search
    if (params && params?.limit > 0 && params?.page >= 0) {
      return await this.paginateAndFilter(params);
    }

    // Filter By Type

    //All
    const data = await this.repository.findAndCount();

    return { data: data[0], pagination: { totalItems: data[1], limit: 10 } };
  }

  async findOne(id: string) {
    const catalogue = await this.repository.findOne({
      where: { id },
    });

    if (!catalogue) {
      throw new NotFoundException('Catalogue not found');
    }

    return catalogue;
  }

  async update(id: string, payload: UpdateActivityDto) {
    const catalogue = await this.repository.findOneBy({ id });

    if (!catalogue) {
      throw new NotFoundException('Catalogue not found');
    }

    this.repository.merge(catalogue, payload);

    return this.repository.save(catalogue);
  }

  async remove(id: string): Promise<ActivityEntity> {
    const catalogue = await this.repository.findOneBy({ id });

    if (!catalogue) {
      throw new NotFoundException('Catalogue not found');
    }

    return await this.repository.softRemove(catalogue);
  }

  private async paginateAndFilter(params: FilterActivityDto) {
    let where: FindOptionsWhere<UserEntity> | FindOptionsWhere<UserEntity>[];
    where = {};
    let { page, search } = params;
    const { limit } = params;

    if (search) {
      search = search.trim();
      page = 0;
      where = [];
      where.push({ name: ILike(`%${search}%`) });
    }

    const response = await this.repository.findAndCount({
      where,
      take: limit,
      skip: PaginationDto.getOffset(limit, page),
    });

    return {
      data: plainToInstance(ReadUserDto, response[0]),
      pagination: { limit, totalItems: response[1] },
    };
  }

  async findActivitiesByAdditionalInformation(
    additionalInformationId: string,
  ): Promise<ActivityEntity[]> {
    return await this.repository.find({
      where: { additionalInformationId },
      order: { sort: 'desc' },
    });
  }

  async create(additionalInformationId: string, payload: any) {
    let activity = await this.repository.findOneBy({
      additionalInformationId,
      code: payload.code,
    });

    if (activity) {
      activity.completed = true;
      activity.registeredAt = new Date();

      await this.repository.save(activity);
    }

    if (!activity) {
      activity = this.repository.create();
      activity.additionalInformationId = additionalInformationId;
      activity.code = payload.code;
      activity.category = payload.category;
      activity.description = payload.description;
      activity.label = payload.label;
      activity.name = payload.name;
      activity.sort = payload.sort;
      activity.completed = true;
      activity.registeredAt = new Date();

      await this.repository.save(activity);
    }

    return { data: null };
  }
}
