import { DataSource } from 'typeorm';
import { ConfigEnum, CoreRepositoryEnum } from '@shared/enums';
import { ParticipantEntity } from './participant.entity';

export const participantProvider = {
  provide: CoreRepositoryEnum.PARTICIPANT_REPOSITORY,
  useFactory: (dataSource: DataSource) =>
    dataSource.getRepository(ParticipantEntity),
  inject: [ConfigEnum.PG_DATA_SOURCE],
};
