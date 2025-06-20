import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ILike, Repository } from 'typeorm';
import { CoreRepositoryEnum } from '@shared/enums';
import { StateEntity } from '@modules/core/state/state.entity';
import * as ExcelJS from 'exceljs';

@Injectable()
export class StateService {
  constructor(
    @Inject(CoreRepositoryEnum.STATE_REPOSITORY)
    private repository: Repository<StateEntity>,
  ) {}

  async findStatesByIdentification(
    identification: string,
  ): Promise<StateEntity[]> {
    return await this.repository.find({
      where: [
        { cedula: ILike(`%${identification}%`) },
        { nombres: ILike(`%${identification}%`) },
      ],
    });
  }

  async readExcel(file: Express.Multer.File): Promise<any> {
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

      console.log({ id, cedula, nombre });
    }

    return rows;
  }

  async createCommentary(identification: string, payload: any) {
    const entity = await this.repository.findOneBy({ cedula: identification });

    if (!entity) {
      throw new NotFoundException();
    }

    entity.comentario = payload.commentary;

    return await this.repository.save(entity);
  }
}
