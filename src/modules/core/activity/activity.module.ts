import { Global, Module } from '@nestjs/common';
import { ActivityController } from './activity.controller';
import { activityProvider } from './activity.provider';
import { CacheModule } from '@nestjs/cache-manager';

@Global()
@Module({
  imports: [CacheModule.register()],
  controllers: [ActivityController],
  providers: [activityProvider, ActivityController],
  exports: [activityProvider, ActivityController, ActivityController],
})
export class ActivityModule {}
