import { Global, Module } from '@nestjs/common';
import { ActivityController } from './activity.controller';
import { activityProvider } from './activity.provider';
import { CacheModule } from '@nestjs/cache-manager';
import { ActivityService } from '@modules/core/activity/activity.service';

@Global()
@Module({
  imports: [CacheModule.register()],
  controllers: [ActivityController],
  providers: [activityProvider, ActivityService],
  exports: [activityProvider],
})
export class ActivityModule {}
