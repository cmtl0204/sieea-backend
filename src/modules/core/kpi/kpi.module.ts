import { Global, Module } from '@nestjs/common';
import { KpiController } from './kpi.controller';
import { kpiProvider } from './kpi.provider';
import { CacheModule } from '@nestjs/cache-manager';
import { StateService } from '@modules/core/state/state.service';

@Global()
@Module({
  imports: [CacheModule.register()],
  controllers: [KpiController],
  providers: [kpiProvider, StateService],
  exports: [kpiProvider],
})
export class KpiModule {}
