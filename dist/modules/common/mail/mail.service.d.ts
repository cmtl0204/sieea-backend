import { MailerService } from '@nestjs-modules/mailer';
import { ConfigType } from '@nestjs/config';
import { config } from '@config';
import { MailDataInterface } from './interfaces/mail-data.interface';
import { FolderPathsService } from './folder-paths.service';
export declare class MailService {
    private readonly mailerService;
    private configService;
    private readonly folderPathsService;
    constructor(mailerService: MailerService, configService: ConfigType<typeof config>, folderPathsService: FolderPathsService);
    sendMail(mailData: MailDataInterface): Promise<{
        accepted: any;
        rejected: any;
        error?: undefined;
        message?: undefined;
    } | {
        error: boolean;
        message: any;
        accepted?: undefined;
        rejected?: undefined;
    }>;
}
