import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { AuthRepositoryEnum } from '@shared/enums';
import { AdditionalInformationEntity } from '@auth/entities/additional-information.entity';
import * as ExcelJS from 'exceljs';

@Injectable()
export class AdditionalInformationService {
  constructor(
    @Inject(AuthRepositoryEnum.ADDITIONAL_INFORMATION_REPOSITORY)
    private additionalInformationRepository: Repository<AdditionalInformationEntity>,
  ) {}

  async readExcel(file: Express.Multer.File): Promise<any[]> {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.load(file.buffer);

    const worksheet = workbook.worksheets[0]; // Usa la primera hoja
    const rows: any[] = [];

    const headerRow = worksheet.getRow(1);
    const headerMap = {};

    // Creamos un mapa: 'NombreCabecera' => índice de columna
    headerRow.eachCell((cell, colNumber) => {
      const rawValue = cell.value;
      if (typeof rawValue === 'string' || typeof rawValue === 'number') {
        const key = String(rawValue).trim(); // Convertimos a string sí o sí
        headerMap[key] = colNumber;
      }
    });

    for (let i = 2; i <= worksheet.rowCount; i++) {
      const row = worksheet.getRow(i);
      const id = row.getCell(headerMap['id']).value;
      const cedula = row.getCell(headerMap['cedula']).value;
      const nombre = row.getCell(headerMap['nombre']).value;
    }
    return rows;
  }
}
