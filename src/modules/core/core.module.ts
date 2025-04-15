import { Global, Module } from '@nestjs/common';
import { CatalogueModule } from '@modules/common/catalogue/catalogue.module';
import { FileModule } from '@modules/common/file/file.module';
import { MailModule } from '@modules/common/mail/mail.module';
import { ActivityModule } from '@modules/core/activity/activity.module';

@Global()
@Module({
  imports: [
    CatalogueModule,
    FileModule,
    MailModule,
    ActivityModule,
  ],
  exports: [CatalogueModule, FileModule, MailModule],
})
export class CoreModule {}
