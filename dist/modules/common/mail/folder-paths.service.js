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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FolderPathsService = void 0;
const common_1 = require("@nestjs/common");
const path_1 = require("path");
let FolderPathsService = class FolderPathsService {
    constructor() { }
    get mailTemporaryFiles() {
        return (0, path_1.join)(process.cwd(), 'src/modules/common/mail/temporary-files');
    }
    get mailImages() {
        return (0, path_1.join)(process.cwd(), 'src/modules/common/mail/images');
    }
    get mailTemplates() {
        return (0, path_1.join)(process.cwd(), 'src/modules/common/mail/templates');
    }
};
exports.FolderPathsService = FolderPathsService;
exports.FolderPathsService = FolderPathsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], FolderPathsService);
//# sourceMappingURL=folder-paths.service.js.map