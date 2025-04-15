"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportsModule = void 0;
const common_1 = require("@nestjs/common");
const catalogue_module_1 = require("../common/catalogue/catalogue.module");
const file_module_1 = require("../common/file/file.module");
const mail_module_1 = require("../common/mail/mail.module");
let ReportsModule = class ReportsModule {
};
exports.ReportsModule = ReportsModule;
exports.ReportsModule = ReportsModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [catalogue_module_1.CatalogueModule, file_module_1.FileModule, mail_module_1.MailModule],
        exports: [catalogue_module_1.CatalogueModule, file_module_1.FileModule, mail_module_1.MailModule],
    })
], ReportsModule);
//# sourceMappingURL=reports.module.js.map