import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { FindOptionsWhere, ILike, Repository } from 'typeorm';
import {
  CreateCatalogueDto,
  FilterCatalogueDto,
  UpdateCatalogueDto,
} from '@modules/common/catalogue/dto';
import { CatalogueEntity } from '@modules/common/catalogue/catalogue.entity';
import { CommonRepositoryEnum, CoreRepositoryEnum } from '@shared/enums';
import { ServiceResponseHttpModel } from '@shared/interfaces';
import { UserEntity } from '@auth/entities';
import { PaginationDto } from '@shared/dto';
import { plainToInstance } from 'class-transformer';
import { ReadUserDto } from '@auth/dto';
import { FilterParticipantDto } from '@modules/core/participant/dto';

@Injectable()
export class ParticipantService {
  clientRedis: any = null;

  constructor(
    @Inject(CommonRepositoryEnum.CATALOGUE_REPOSITORY)
    private repository: Repository<CatalogueEntity>,
  ) {}

  async create(payload: CreateCatalogueDto): Promise<CatalogueEntity> {
    const newCatalogue = this.repository.create(payload);

    return await this.repository.save(newCatalogue);
  }

  async findAll(
    params?: FilterParticipantDto,
  ): Promise<ServiceResponseHttpModel> {
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

  async update(id: string, payload: UpdateCatalogueDto) {
    const catalogue = await this.repository.findOneBy({ id });

    if (!catalogue) {
      throw new NotFoundException('Catalogue not found');
    }

    this.repository.merge(catalogue, payload);

    return this.repository.save(catalogue);
  }

  async remove(id: string): Promise<CatalogueEntity> {
    const catalogue = await this.repository.findOneBy({ id });

    if (!catalogue) {
      throw new NotFoundException('Catalogue not found');
    }

    return await this.repository.softRemove(catalogue);
  }

  private async paginateAndFilter(params: FilterCatalogueDto) {
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
}
