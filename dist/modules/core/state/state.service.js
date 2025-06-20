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
    constructor(repository) {
        this.repository = repository;
    }
    async findStatesByAdditionalInformation(additionalInformationId) {
        return await this.repository.findOne({
            where: { additionalInformationId },
        });
    }
    async readExcel(file) {
        const workbook = new ExcelJS.Workbook();
        await workbook.xlsx.load(file.buffer);
        const worksheet = workbook.worksheets[0];
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
            const id = row.getCell(headerMap['id']).value;
            const cedula = row.getCell(headerMap['cedula']).value;
            const nombre = row.getCell(headerMap['nombre']).value;
            console.log({ id, cedula, nombre });
        }
        return rows;
    }
};
exports.StateService = StateService;
exports.StateService = StateService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(enums_1.CoreRepositoryEnum.STATE_REPOSITORY)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], StateService);
//# sourceMappingURL=state.service.js.map