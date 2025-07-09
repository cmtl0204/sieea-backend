"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const config_1 = require("@nestjs/config");
const Joi = require("joi");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const platform_express_1 = require("@nestjs/platform-express");
const _config_1 = require("./config");
const auth_module_1 = require("./modules/auth/auth.module");
const common_module_1 = require("./modules/common/common.module");
const core_module_1 = require("./modules/core/core.module");
const nest_winston_1 = require("nest-winston");
const winston = require("winston");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: '.env',
                isGlobal: true,
                load: [_config_1.config],
                validationSchema: Joi.object({
                    APP_URL: Joi.string().required(),
                    API_KEY: Joi.string().required(),
                    JWT_SECRET: Joi.string().required(),
                    RECAPTCHA_SITE_SECRET: Joi.string().required(),
                    DB_HOST: Joi.string().required(),
                    DB_NAME: Joi.string().required(),
                    DB_PASSWORD: Joi.string().required(),
                    DB_PORT: Joi.number().required(),
                    DB_USER: Joi.string().required(),
                    MAIL_HOST: Joi.string().required(),
                    MAIL_PORT: Joi.string().required(),
                    MAIL_USERNAME: Joi.string().required(),
                    MAIL_PASSWORD: Joi.string().required(),
                    MAIL_FROM_ADDRESS: Joi.string().required(),
                    URL_LDAP: Joi.string().required(),
                }),
            }),
            nest_winston_1.WinstonModule.forRoot({
                transports: [
                    new winston.transports.Console({
                        format: winston.format.combine(winston.format.colorize(), winston.format.simple()),
                    }),
                    new winston.transports.File({
                        filename: 'logs/app.log',
                        format: winston.format.combine(winston.format.timestamp(), winston.format.printf(({ timestamp, level, message }) => {
                            return `[${timestamp}] ${level}: ${message}`;
                        })),
                    }),
                ],
            }),
            platform_express_1.MulterModule.register({ dest: './uploads' }),
            axios_1.HttpModule,
            auth_module_1.AuthModule,
            common_module_1.CommonModule,
            core_module_1.CoreModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map