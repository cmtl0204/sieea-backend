import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { AuthRepositoryEnum, CoreRepositoryEnum } from '@shared/enums';
import { UserEntity } from '@auth/entities';
import { KpiEntity } from '@modules/core/kpi/kpi.entity';

@Injectable()
export class KpiService {
  constructor(
    @Inject(CoreRepositoryEnum.KPI_REPOSITORY)
    private repository: Repository<KpiEntity>
  ) {}

  async create(user: UserEntity, payload: any) {
    const entity = this.repository.create();
    entity.userId = user.id;
    entity.stateId = payload.stateId;
    entity.registeredAt = new Date();

    return await this.repository.save(entity);
  }
}
