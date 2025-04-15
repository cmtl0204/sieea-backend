"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileModule = void 0;
const common_1 = require("@nestjs/common");
const files_controller_1 = require("./files.controller");
const files_service_1 = require("./files.service");
const file_providers_1 = require("./file.providers");
let FileModule = class FileModule {
};
exports.FileModule = FileModule;
exports.FileModule = FileModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        controllers: [files_controller_1.FilesController],
        providers: [...file_providers_1.fileProviders, files_service_1.FilesService],
        exports: [...file_providers_1.fileProviders, files_service_1.FilesService],
    })
], FileModule);
//# sourceMappingURL=file.module.js.map