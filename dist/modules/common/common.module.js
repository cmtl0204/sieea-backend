"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonModule = void 0;
const common_1 = require("@nestjs/common");
const catalogue_module_1 = require("./catalogue/catalogue.module");
const file_module_1 = require("./file/file.module");
const mail_module_1 = require("./mail/mail.module");
const ubication_module_1 = require("./ubication/ubication.module");
let CommonModule = class CommonModule {
};
exports.CommonModule = CommonModule;
exports.CommonModule = CommonModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [catalogue_module_1.CatalogueModule, file_module_1.FileModule, mail_module_1.MailModule, ubication_module_1.UbicationModule],
        exports: [catalogue_module_1.CatalogueModule, file_module_1.FileModule, mail_module_1.MailModule, ubication_module_1.UbicationModule],
    })
], CommonModule);
//# sourceMappingURL=common.module.js.map