import { Global, Module } from '@nestjs/common';
import { ParticipantController } from './participant.controller';
import { participantProvider } from './participant.provider';
import { CacheModule } from '@nestjs/cache-manager';

@Global()
@Module({
  imports: [CacheModule.register()],
  controllers: [ParticipantController],
  providers: [participantProvider, ParticipantController],
  exports: [participantProvider, ParticipantController, ParticipantController],
})
export class ParticipantModule {}
