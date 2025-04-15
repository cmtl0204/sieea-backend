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
exports.FilesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const enums_1 = require("../../../shared/enums");
const path = require("path");
const path_1 = require("path");
const fs = require("fs");
const dto_1 = require("../../../shared/dto");
let FilesService = class FilesService {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async uploadFile(file, modelId, typeId) {
        const filePath = `uploads/${new Date().getFullYear()}/${new Date().getMonth()}/${file.filename}`;
        const payload = {
            modelId,
            fileName: file.filename,
            extension: path.extname(file.originalname),
            originalName: file.originalname,
            path: filePath,
            size: file.size,
            typeId: typeId,
        };
        const newFile = this.repository.create(payload);
        return await this.repository.save(newFile);
    }
    async uploadFiles(files, modelId) {
        files.forEach((file) => {
            const filePath = `uploads/${new Date().getFullYear()}/${new Date().getMonth()}/${file.filename}`;
            const payload = {
                modelId,
                fileName: file.filename,
                extension: path.extname(file.originalname),
                originalName: file.originalname,
                path: filePath,
                size: file.size,
            };
            const newFile = this.repository.create(payload);
            this.repository.save(newFile);
        });
    }
    async findOne(id) {
        const entity = await this.repository.findOneBy({ id });
        if (!entity) {
            throw new common_1.NotFoundException('El perfil no existe');
        }
        return entity;
    }
    async getPath(id) {
        const file = await this.findOne(id);
        const path = (0, path_1.join)(process.cwd(), 'storage/private', file?.path);
        if (!fs.existsSync(path)) {
            throw new common_1.NotFoundException('File not found');
        }
        return path;
    }
    async findByModel(modelId, params) {
        if (params && params?.limit > 0 && params?.page >= 0) {
            return await this.paginateAndFilter(modelId, params);
        }
        const data = await this.repository.findAndCount({
            relations: { type: true },
            where: { modelId },
        });
        return { pagination: { totalItems: data[1], limit: 10 }, data: data[0] };
    }
    async paginateAndFilter(modelId, params) {
        let where;
        let { page, search } = params;
        const { limit } = params;
        where = [];
        where.push({ modelId: (0, typeorm_1.Equal)(modelId) });
        if (search) {
            search = search.trim();
            page = 0;
            where = [];
            where.push({
                originalName: (0, typeorm_1.ILike)(`%${search}%`),
                modelId: (0, typeorm_1.Equal)(modelId),
            });
        }
        const response = await this.repository.findAndCount({
            relations: { type: true },
            where,
            take: limit,
            skip: dto_1.PaginationDto.getOffset(limit, page),
        });
        return {
            pagination: { limit, totalItems: response[1] },
            data: response[0],
        };
    }
    async remove(id) {
        const entity = await this.repository.findOneBy({ id });
        if (!entity) {
            throw new common_1.NotFoundException(enums_1.MessageEnum.NOT_FOUND);
        }
        if (entity?.fileName) {
            try {
                fs.unlinkSync((0, path_1.join)(process.cwd(), 'storage/private', entity.path));
                return await this.repository.softRemove(entity);
            }
            catch (err) {
                console.error('Something wrong happened removing the file', err);
            }
        }
    }
};
exports.FilesService = FilesService;
exports.FilesService = FilesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(enums_1.CommonRepositoryEnum.FILE_REPOSITORY)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], FilesService);
//# sourceMappingURL=files.service.js.map