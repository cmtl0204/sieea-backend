import { Global, Module } from '@nestjs/common';
import { StateController } from './state.controller';
import { stateProvider } from './state.provider';
import { CacheModule } from '@nestjs/cache-manager';
import { StateService } from '@modules/core/state/state.service';

@Global()
@Module({
  imports: [CacheModule.register()],
  controllers: [StateController],
  providers: [stateProvider, StateService],
  exports: [stateProvider],
})
export class StateModule {}
