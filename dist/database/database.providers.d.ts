import { DataSource } from 'typeorm';
import { ConfigType } from '@nestjs/config';
import { ConfigEnum } from '../shared/enums';
import { config } from '@config';
export declare const databaseProviders: {
    provide: ConfigEnum;
    inject: (string | symbol)[];
    useFactory: (configService: ConfigType<typeof config>) => Promise<DataSource>;
}[];
