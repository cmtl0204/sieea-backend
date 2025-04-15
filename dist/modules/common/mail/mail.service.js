"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailService = void 0;
const common_1 = require("@nestjs/common");
const mailer_1 = require("@nestjs-modules/mailer");
const _config_1 = require("../../../config");
const path_1 = require("path");
const folder_paths_service_1 = require("./folder-paths.service");
let MailService = class MailService {
    mailerService;
    configService;
    folderPathsService;
    constructor(mailerService, configService, folderPathsService) {
        this.mailerService = mailerService;
        this.configService = configService;
        this.folderPathsService = folderPathsService;
    }
    async sendMail(mailData) {
        const mailAttachments = [];
        if (mailData?.attachments) {
            mailData.attachments.forEach((attachment) => {
                let data;
                if (attachment.file) {
                    data = {
                        content: attachment.file,
                        filename: attachment.filename,
                        contentDisposition: 'attachment',
                    };
                    mailAttachments.push(data);
                }
                if (attachment.path) {
                    data = {
                        path: (0, path_1.join)(this.folderPathsService.mailTemporaryFiles, attachment.path),
                        filename: attachment.filename,
                        contentDisposition: 'attachment',
                    };
                    mailAttachments.push(data);
                }
            });
        }
        if (mailData?.attachment) {
            let data;
            if (mailData.attachment.file) {
                data = {
                    content: mailData.attachment.file,
                    filename: mailData.attachment.filename,
                    contentDisposition: 'attachment',
                };
                mailAttachments.push(data);
            }
            if (mailData.attachment.path) {
                data = {
                    path: (0, path_1.join)(this.folderPathsService.mailTemporaryFiles, mailData.attachment.path),
                    filename: mailData.attachment.filename,
                    contentDisposition: 'attachment',
                };
                mailAttachments.push(data);
            }
        }
        const header = {
            filename: 'header.png',
            path: (0, path_1.join)(this.folderPathsService.mailImages, 'header.png'),
            cid: 'header',
        };
        const footer = {
            filename: 'footer.png',
            path: (0, path_1.join)(this.folderPathsService.mailImages, 'footer.png'),
            cid: 'footer',
        };
        mailAttachments.push(header);
        mailAttachments.push(footer);
        const sendMailOptions = {
            to: mailData.to,
            from: `${this.configService.mail.fromName} - ${this.configService.mail.from}`,
            subject: mailData.subject,
            template: mailData.template,
            context: { system: 'environments.appName', data: mailData.data },
            attachments: mailAttachments,
        };
        try {
            const response = await this.mailerService.sendMail(sendMailOptions);
            return {
                accepted: response.accepted,
                rejected: response.rejected,
            };
        }
        catch (error) {
            console.error('Error al enviar el correo:', error);
            return {
                error: true,
                message: error.message || 'No se pudo enviar el correo',
            };
        }
    }
};
exports.MailService = MailService;
exports.MailService = MailService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)(_config_1.config.KEY)),
    __metadata("design:paramtypes", [mailer_1.MailerService, void 0, folder_paths_service_1.FolderPathsService])
], MailService);
//# sourceMappingURL=mail.service.js.map