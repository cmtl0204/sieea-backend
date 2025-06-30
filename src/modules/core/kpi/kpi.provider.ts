import { DataSource } from 'typeorm';
import { ConfigEnum, CoreRepositoryEnum } from '@shared/enums';
import { KpiEntity } from './kpi.entity';

export const kpiProvider = {
  provide: CoreRepositoryEnum.STATE_REPOSITORY,
  useFactory: (dataSource: DataSource) => dataSource.getRepository(KpiEntity),
  inject: [ConfigEnum.PG_DATA_SOURCE],
};
