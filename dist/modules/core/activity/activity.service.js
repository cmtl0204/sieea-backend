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
exports.ActivityService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const enums_1 = require("../../../shared/enums");
const dto_1 = require("../../../shared/dto");
const class_transformer_1 = require("class-transformer");
const dto_2 = require("../../auth/dto");
let ActivityService = class ActivityService {
    repository;
    additionalInformationRepository;
    clientRedis = null;
    constructor(repository, additionalInformationRepository) {
        this.repository = repository;
        this.additionalInformationRepository = additionalInformationRepository;
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
            skip: dto_1.PaginationDto.getOffset(limit, page),
        });
        return {
            data: (0, class_transformer_1.plainToInstance)(dto_2.ReadUserDto, response[0]),
            pagination: { limit, totalItems: response[1] },
        };
    }
    async findActivitiesByAdditionalInformation(additionalInformationId) {
        return await this.repository.find({
            where: { additionalInformationId },
            order: { sort: 'desc' },
        });
    }
    async create(additionalInformationId, payload) {
        let activity = await this.repository.findOneBy({
            additionalInformationId,
            code: payload.code,
        });
        if (activity) {
            activity.completed = true;
            activity.registeredAt = new Date();
            await this.repository.save(activity);
        }
        if (!activity) {
            activity = this.repository.create();
            activity.additionalInformationId = additionalInformationId;
            activity.code = payload.code;
            activity.category = payload.category;
            activity.description = payload.description;
            activity.label = payload.label;
            activity.name = payload.name;
            activity.sort = payload.sort;
            activity.completed = true;
            activity.registeredAt = new Date();
            await this.repository.save(activity);
        }
        return { data: null };
    }
};
exports.ActivityService = ActivityService;
exports.ActivityService = ActivityService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(enums_1.CoreRepositoryEnum.ACTIVITY_REPOSITORY)),
    __param(1, (0, common_1.Inject)(enums_1.AuthRepositoryEnum.ADDITIONAL_INFORMATION_REPOSITORY)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository])
], ActivityService);
//# sourceMappingURL=activity.service.js.map