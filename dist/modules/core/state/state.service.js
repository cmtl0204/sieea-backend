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
exports.StateService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const enums_1 = require("../../../shared/enums");
const ExcelJS = require("exceljs");
let StateService = class StateService {
    repository;
    userRepository;
    constructor(repository, userRepository) {
        this.repository = repository;
        this.userRepository = userRepository;
    }
    async findStatesByIdentification(identification) {
        return await this.repository.find({
            where: [
                { cedula: (0, typeorm_1.ILike)(`%${identification}%`) },
                { nombres: (0, typeorm_1.ILike)(`%${identification}%`) },
            ],
            take: 500,
        });
    }
    async readExcel(file) {
        const workbook = new ExcelJS.Workbook();
        await workbook.xlsx.load(file.buffer);
        const worksheet = workbook.worksheets[0];
        if (workbook.worksheets.length === 0) {
            throw new Error('El archivo Excel no contiene hojas');
        }
        const rows = [];
        const headerRow = worksheet.getRow(1);
        const headerMap = {};
        headerRow.eachCell((cell, colNumber) => {
            const rawValue = cell.value;
            if (typeof rawValue === 'string' || typeof rawValue === 'number') {
                const key = String(rawValue).trim();
                headerMap[key] = colNumber;
            }
        });
        for (let i = 2; i <= worksheet.rowCount; i++) {
            const row = worksheet.getRow(i);
            const cedula = row.getCell(headerMap['cedula']).value?.toString();
            let entity = await this.repository.findOneBy({
                cedula,
            });
            if (!entity) {
                entity = this.repository.create();
            }
            const user = await this.userRepository.findOneBy({
                identification: cedula,
            });
            if (user)
                entity.user = user;
            entity.metaA1 = '4';
            entity.metaA2 = '4';
            entity.metaB1 = '0';
            entity.metaB2 = '100';
            entity.metaC1 = '20';
            entity.metaC2 = '0';
            if (cedula)
                entity.cedula = cedula;
            const habilitado = row.getCell(headerMap['habilitado']).value?.toString();
            if (habilitado)
                entity.habilitado = habilitado;
            const direccionZonal = row
                .getCell(headerMap['direccionZonal'])
                .value?.toString();
            if (direccionZonal)
                entity.direccionZonal = direccionZonal;
            const provincia = row.getCell(headerMap['provincia']).value?.toString();
            if (provincia)
                entity.provincia = provincia;
            const nombres = row.getCell(headerMap['nombres']).value?.toString();
            if (nombres)
                entity.nombres = nombres;
            const actividad = row.getCell(headerMap['actividad']).value?.toString();
            if (actividad)
                entity.actividad = actividad;
            const curso = row.getCell(headerMap['curso']).value?.toString();
            if (curso)
                entity.curso = curso;
            const actividadA1 = row
                .getCell(headerMap['actividadA1'])
                .value?.toString();
            if (actividadA1)
                entity.actividadA1 = actividadA1;
            const actividadA2 = row
                .getCell(headerMap['actividadA2'])
                .value?.toString();
            if (actividadA2)
                entity.actividadA2 = actividadA2;
            const actividadB1 = row
                .getCell(headerMap['actividadB1'])
                .value?.toString();
            if (actividadB1)
                entity.actividadB1 = actividadB1;
            const actividadB2 = row
                .getCell(headerMap['actividadB2'])
                .value?.toString();
            if (actividadB2)
                entity.actividadB2 = actividadB2;
            const cantidadA1 = row.getCell(headerMap['cantidadA1']).value?.toString();
            if (cantidadA1)
                entity.cantidadA1 = cantidadA1;
            const cantidadA2 = row.getCell(headerMap['cantidadA2']).value?.toString();
            if (cantidadA2)
                entity.cantidadA2 = cantidadA2;
            const cantidadB1 = row.getCell(headerMap['cantidadB1']).value?.toString();
            if (cantidadB1)
                entity.cantidadB1 = cantidadB1;
            const cantidadB2 = row.getCell(headerMap['cantidadB2']).value?.toString();
            if (cantidadB2)
                entity.cantidadB2 = cantidadB2;
            const cantidadC1 = row.getCell(headerMap['cantidadC1']).value?.toString();
            if (cantidadC1)
                entity.cantidadC1 = cantidadC1;
            const cantidadC2 = row.getCell(headerMap['cantidadC2']).value?.toString();
            if (cantidadC2)
                entity.cantidadC2 = cantidadC2;
            const cumple = row.getCell(headerMap['cumple']).value?.toString();
            if (cumple)
                entity.cumple = cumple;
            const totalCantidadAbril = row
                .getCell(headerMap['totalCantidadAbril'])
                .value?.toString();
            if (totalCantidadAbril)
                entity.totalCantidadAbril = totalCantidadAbril;
            const totalCantidadMayo = row
                .getCell(headerMap['totalCantidadMayo'])
                .value?.toString();
            if (totalCantidadMayo)
                entity.totalCantidadMayo = totalCantidadMayo;
            await this.repository.save(entity);
        }
        return rows;
    }
    async createCommentary(identification, payload) {
        const entity = await this.repository.findOneBy({ cedula: identification });
        if (!entity) {
            throw new common_1.NotFoundException();
        }
        entity.comentario = payload.commentary;
        return await this.repository.save(entity);
    }
    async createReview(identification) {
        const entity = await this.repository.findOneBy({ cedula: identification });
        if (!entity) {
            throw new common_1.NotFoundException();
        }
        if (!entity.clickCount)
            entity.clickCount = 1;
        else
            entity.clickCount = entity.clickCount + 1;
        return await this.repository.save(entity);
    }
};
exports.StateService = StateService;
exports.StateService = StateService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(enums_1.CoreRepositoryEnum.STATE_REPOSITORY)),
    __param(1, (0, common_1.Inject)(enums_1.AuthRepositoryEnum.USER_REPOSITORY)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository])
], StateService);
//# sourceMappingURL=state.service.js.map