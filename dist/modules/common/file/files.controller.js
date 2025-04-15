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
exports.FilesController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const files_service_1 = require("./files.service");
const helpers_1 = require("../../../shared/helpers");
const path_1 = require("path");
const swagger_1 = require("@nestjs/swagger");
const dto_1 = require("./dto");
const fs = require("fs");
let FilesController = class FilesController {
    filesService;
    constructor(filesService) {
        this.filesService = filesService;
    }
    async uploadFile(file, modelId, typeId) {
        const response = await this.filesService.uploadFile(file, modelId, typeId);
        return {
            data: response,
            message: 'Archivo Subido Correctamente',
            title: 'Archivo Subido',
        };
    }
    async uploadFiles(files, modelId, payload) {
        await this.filesService.uploadFiles(files, modelId);
        return {
            data: null,
            message: 'Archivos Subidos Correctamente',
            title: 'Archivos Subidos',
        };
    }
    async download(id, res) {
        const path = await this.filesService.getPath(id);
        return {
            data: res.sendFile(path),
            message: 'Download File',
            title: 'Download',
        };
    }
    async findByModel(modelId, params) {
        const serviceResponse = await this.filesService.findByModel(modelId, params);
        return {
            data: serviceResponse.data,
            pagination: serviceResponse.pagination,
            message: 'Find Files',
            title: 'Find By Model',
        };
    }
    async remove(id) {
        const serviceResponse = await this.filesService.remove(id);
        return {
            data: serviceResponse,
            message: 'Archivo Eliminado',
            title: 'Eliminado',
        };
    }
    async readFiles() {
        const path = 'C:\\Users\\cesar.tamayo\\Desktop\\blacibu\\files';
        const files = fs.readdirSync(path);
        files.forEach((file) => {
            const pathFile = (0, path_1.join)(path, file);
            const newPathFile = pathFile
                .replace('á', 'a')
                .replace('é', 'e')
                .replace('í', 'i')
                .replace('ó', 'o')
                .replace('ú', 'u');
            const dataFile = fs.lstatSync(pathFile);
            fs.rename(pathFile, newPathFile, function (err) {
                if (err)
                    console.log('ERROR: ' + err);
            });
        });
        return { data: null, message: '', title: '' };
    }
};
exports.FilesController = FilesController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Upload File' }),
    (0, common_1.Post)(':modelId/upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.diskStorage)({
            destination: (0, path_1.join)(process.cwd(), 'storage/private/uploads', `${new Date().getFullYear()}/${new Date().getMonth()}`),
            filename: helpers_1.getFileName,
        }),
        fileFilter: helpers_1.fileFilter,
        limits: { fieldSize: 10 },
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Param)('modelId', common_1.ParseUUIDPipe)),
    __param(2, (0, common_1.Query)('typeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", Promise)
], FilesController.prototype, "uploadFile", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Upload Files' }),
    (0, common_1.Post)(':modelId/uploads'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('files[]', 10, {
        storage: (0, multer_1.diskStorage)({
            destination: (0, path_1.join)(process.cwd(), 'storage/private/uploads', `${new Date().getFullYear()}/${new Date().getMonth()}`),
            filename: helpers_1.getFileName,
        }),
        fileFilter: helpers_1.fileFilter,
        limits: { fieldSize: 10 },
    })),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Param)('modelId', common_1.ParseUUIDPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, String, Object]),
    __metadata("design:returntype", Promise)
], FilesController.prototype, "uploadFiles", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Download File' }),
    (0, common_1.Get)(':id/download'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], FilesController.prototype, "download", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Find By Model' }),
    (0, common_1.Get)('models/:modelId'),
    __param(0, (0, common_1.Param)('modelId', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.FilterFileDto]),
    __metadata("design:returntype", Promise)
], FilesController.prototype, "findByModel", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete' }),
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FilesController.prototype, "remove", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Read Files' }),
    (0, common_1.Get)('read-files'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FilesController.prototype, "readFiles", null);
exports.FilesController = FilesController = __decorate([
    (0, swagger_1.ApiTags)('Files'),
    (0, common_1.Controller)('files'),
    __metadata("design:paramtypes", [files_service_1.FilesService])
], FilesController);
//# sourceMappingURL=files.controller.js.map