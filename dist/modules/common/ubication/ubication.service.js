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
exports.CataloguesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const enums_1 = require("../../../shared/enums");
const dto_1 = require("../../auth/dto");
const class_transformer_1 = require("class-transformer");
const cache_manager_1 = require("@nestjs/cache-manager");
const dto_2 = require("../../../shared/dto");
let CataloguesService = class CataloguesService {
    repository;
    cacheManager;
    clientRedis = null;
    constructor(repository, cacheManager) {
        this.repository = repository;
        this.cacheManager = cacheManager;
    }
    async create(payload) {
        const newCatalogue = this.repository.create(payload);
        return await this.repository.save(newCatalogue);
    }
    async catalogue(type) {
        const data = await this.repository.find({
            where: { type },
        });
        return data;
    }
    async findAll(params) {
        if (params && params?.limit > 0 && params?.page >= 0) {
            return await this.paginateAndFilter(params);
        }
        const data = await this.repository.findAndCount();
        return { data: data[0], pagination: { totalItems: data[1], limit: 10 } };
    }
    async findOne(id) {
        const catalogue = await this.repository.findOne({
            where: { id },
        });
        if (!catalogue) {
            throw new common_1.NotFoundException('Catalogue not found');
        }
        return catalogue;
    }
    async findByCode(code) {
        const catalogue = await this.repository.findOne({
            where: { code },
        });
        if (!catalogue) {
            throw new common_1.NotFoundException('Catalogue not found');
        }
        return catalogue;
    }
    async findByType(type) {
        const catalogue = await this.repository.find({
            where: { type },
        });
        if (!catalogue) {
            throw new common_1.NotFoundException('Catalogue not found');
        }
        return catalogue;
    }
    async update(id, payload) {
        const catalogue = await this.repository.findOneBy({ id });
        if (!catalogue) {
            throw new common_1.NotFoundException('Catalogue not found');
        }
        this.repository.merge(catalogue, payload);
        return this.repository.save(catalogue);
    }
    async remove(id) {
        const catalogue = await this.repository.findOneBy({ id });
        if (!catalogue) {
            throw new common_1.NotFoundException('Catalogue not found');
        }
        return await this.repository.softRemove(catalogue);
    }
    async removeAll(payload) {
        return await this.repository.softRemove(payload);
    }
    async paginateAndFilter(params) {
        let where;
        where = {};
        let { page, search } = params;
        const { limit } = params;
        if (search) {
            search = search.trim();
            page = 0;
            where = [];
            where.push({ name: (0, typeorm_1.ILike)(`%${search}%`) });
        }
        const response = await this.repository.findAndCount({
            where,
            take: limit,
            skip: dto_2.PaginationDto.getOffset(limit, page),
        });
        return {
            data: (0, class_transformer_1.plainToInstance)(dto_1.ReadUserDto, response[0]),
            pagination: { limit, totalItems: response[1] },
        };
    }
    async findCache() {
        let catalogues = (await this.cacheManager.get(enums_1.CacheEnum.CATALOGUES));
        if (catalogues === null ||
            catalogues === undefined ||
            catalogues.length === 0) {
            catalogues = await this.repository.find({
                relations: { children: true },
                where: { parent: (0, typeorm_1.IsNull)() },
                order: { type: 'asc', sort: 'asc', name: 'asc' },
            });
            await this.cacheManager.set(enums_1.CacheEnum.CATALOGUES, catalogues);
        }
        return catalogues;
    }
    async loadCache() {
        const catalogues = await this.repository.find({
            relations: { children: true },
            where: { parent: (0, typeorm_1.IsNull)() },
            order: { type: 'asc', sort: 'asc', name: 'asc' },
        });
        await this.cacheManager.set(enums_1.CacheEnum.CATALOGUES, catalogues);
        return catalogues;
    }
};
exports.CataloguesService = CataloguesService;
exports.CataloguesService = CataloguesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(enums_1.CommonRepositoryEnum.CATALOGUE_REPOSITORY)),
    __param(1, (0, common_1.Inject)(cache_manager_1.CACHE_MANAGER)),
    __metadata("design:paramtypes", [typeorm_1.Repository, Object])
], CataloguesService);
//# sourceMappingURL=ubication.service.js.map