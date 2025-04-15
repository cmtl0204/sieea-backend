"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailModule = void 0;
const common_1 = require("@nestjs/common");
const handlebars_adapter_1 = require("@nestjs-modules/mailer/dist/adapters/handlebars.adapter");
const files_controller_1 = require("../file/files.controller");
const folder_paths_service_1 = require("./folder-paths.service");
const mailer_1 = require("@nestjs-modules/mailer");
const _config_1 = require("../../../config");
const path_1 = require("path");
const mail_service_1 = require("./mail.service");
let MailModule = class MailModule {
};
exports.MailModule = MailModule;
exports.MailModule = MailModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [
            mailer_1.MailerModule.forRootAsync({
                inject: [_config_1.config.KEY],
                useFactory: (configService) => ({
                    transport: {
                        host: configService.mail.host,
                        port: configService.mail.port,
                        secure: false,
                        auth: {
                            user: configService.mail.user,
                            pass: configService.mail.pass,
                        },
                    },
                    defaults: {
                        from: configService.mail.from,
                    },
                    template: {
                        dir: (0, path_1.join)(process.cwd(), 'src/modules/common/mail/templates'),
                        adapter: new handlebars_adapter_1.HandlebarsAdapter(),
                        options: {
                            static: true,
                        },
                    },
                }),
            }),
        ],
        controllers: [files_controller_1.FilesController],
        providers: [mail_service_1.MailService, folder_paths_service_1.FolderPathsService],
        exports: [mail_service_1.MailService, folder_paths_service_1.FolderPathsService],
    })
], MailModule);
//# sourceMappingURL=mail.module.js.map