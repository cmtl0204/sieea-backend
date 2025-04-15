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
exports.RolesService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const typeorm_1 = require("typeorm");
const dto_1 = require("../../../shared/dto");
const enums_1 = require("../../../shared/enums");
const dto_2 = require("../dto");
let RolesService = class RolesService {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async create(payload) {
        const newRole = this.repository.create(payload);
        const roleCreated = await this.repository.save(newRole);
        return { data: (0, class_transformer_1.plainToInstance)(dto_2.ReadRoleDto, roleCreated) };
    }
    async createMenus(role) {
        return await this.repository.save(role);
    }
    async catalogue() {
        const response = await this.repository.findAndCount({ take: 1000 });
        return {
            data: response[0],
            pagination: { totalItems: response[1], limit: 10 },
        };
    }
    async findAll(params) {
        if (params && params?.limit > 0 && params?.page >= 0) {
            return await this.paginateAndFilter(params);
        }
        const response = await this.repository.findAndCount({
            order: { updatedAt: 'DESC' },
        });
        return {
            data: (0, class_transformer_1.plainToInstance)(dto_2.ReadRoleDto, response[0]),
            pagination: { totalItems: response[1], limit: 10 },
        };
    }
    async findOne(id) {
        const role = await this.repository.findOneBy({ id });
        if (!role) {
            throw new common_1.NotFoundException('Role not found');
        }
        return { data: (0, class_transformer_1.plainToInstance)(dto_2.ReadRoleDto, role) };
    }
    async findByCode(code) {
        const role = await this.repository.findOneBy({ code });
        if (!role) {
            throw new common_1.NotFoundException('Role not found');
        }
        return role;
    }
    async update(id, payload) {
        const role = await this.repository.preload({ id, ...payload });
        if (!role) {
            throw new common_1.NotFoundException('Role not found');
        }
        const roleUpdated = await this.repository.save(role);
        return { data: (0, class_transformer_1.plainToInstance)(dto_2.ReadRoleDto, roleUpdated) };
    }
    async remove(id) {
        const role = await this.repository.findOneBy({ id });
        if (!role) {
            throw new common_1.NotFoundException('Role not found');
        }
        const roleDeleted = await this.repository.softRemove(role);
        return { data: (0, class_transformer_1.plainToInstance)(dto_2.ReadRoleDto, roleDeleted) };
    }
    async removeAll(payload) {
        const rolesDeleted = await this.repository.softRemove(payload);
        return { data: rolesDeleted };
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
            where.push({ code: (0, typeorm_1.ILike)(`%${search}%`) });
            where.push({ name: (0, typeorm_1.ILike)(`%${search}%`) });
        }
        const response = await this.repository.findAndCount({
            where,
            take: limit,
            skip: dto_1.PaginationDto.getOffset(limit, page),
            order: {
                updatedAt: 'DESC',
            },
        });
        return {
            data: (0, class_transformer_1.plainToInstance)(dto_2.ReadRoleDto, response[0]),
            pagination: { limit, totalItems: response[1] },
        };
    }
};
exports.RolesService = RolesService;
exports.RolesService = RolesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(enums_1.AuthRepositoryEnum.ROLE_REPOSITORY)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], RolesService);
//# sourceMappingURL=roles.service.js.map