import { DataSource } from 'typeorm';
import { ConfigEnum, CoreRepositoryEnum } from '@shared/enums';
import { ActivityEntity } from './activity.entity';

export const activityProvider = {
  provide: CoreRepositoryEnum.ACTIVITY_REPOSITORY,
  useFactory: (dataSource: DataSource) =>
    dataSource.getRepository(ActivityEntity),
  inject: [ConfigEnum.PG_DATA_SOURCE],
};
