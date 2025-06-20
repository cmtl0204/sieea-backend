import { DataSource } from 'typeorm';
import { ConfigEnum, CoreRepositoryEnum } from '@shared/enums';
import { StateEntity } from './state.entity';

export const stateProvider = {
  provide: CoreRepositoryEnum.STATE_REPOSITORY,
  useFactory: (dataSource: DataSource) => dataSource.getRepository(StateEntity),
  inject: [ConfigEnum.PG_DATA_SOURCE],
};
