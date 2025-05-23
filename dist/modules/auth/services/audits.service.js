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
exports.AuditsService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const typeorm_1 = require("typeorm");
const dto_1 = require("../dto");
const enums_1 = require("../../../shared/enums");
let AuditsService = class AuditsService {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async create(payload) {
        const newEntity = this.repository.create(payload);
        return await this.repository.save(newEntity);
    }
    async update(id, payload) {
        const menu = await this.repository.preload({ id, ...payload });
        if (!menu) {
            throw new common_1.NotFoundException('Menu not found');
        }
        const menuUpdated = await this.repository.save(menu);
        return { data: (0, class_transformer_1.plainToInstance)(dto_1.ReadMenuDto, menuUpdated) };
    }
};
exports.AuditsService = AuditsService;
exports.AuditsService = AuditsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(enums_1.AuthRepositoryEnum.AUDIT_REPOSITORY)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], AuditsService);
//# sourceMappingURL=audits.service.js.map