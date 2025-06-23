import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ILike, Repository } from 'typeorm';
import { AuthRepositoryEnum, CoreRepositoryEnum } from '@shared/enums';
import { StateEntity } from '@modules/core/state/state.entity';
import * as ExcelJS from 'exceljs';
import { UserEntity } from '@auth/entities';

@Injectable()
export class StateService {
  constructor(
    @Inject(CoreRepositoryEnum.STATE_REPOSITORY)
    private repository: Repository<StateEntity>,
    @Inject(AuthRepositoryEnum.USER_REPOSITORY)
    private userRepository: Repository<UserEntity>,
  ) {}

  async findStatesByIdentification(
    identification: string,
  ): Promise<StateEntity[]> {
    return await this.repository.find({
      where: [
        { cedula: ILike(`%${identification}%`) },
        { nombres: ILike(`%${identification}%`) },
      ],
      take: 1000,
    });
  }

  async readExcel(file: Express.Multer.File): Promise<any> {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.load(file.buffer);

    const worksheet = workbook.worksheets[0]; // Usa la primera hoja

    if (workbook.worksheets.length === 0) {
      throw new Error('El archivo Excel no contiene hojas');
    }
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

      const cedula = row.getCell(headerMap['cedula']).value?.toString();

      let entity = await this.repository.findOneBy({
        cedula,
      });

      if (!entity) {
        entity = this.repository.create();
      }

      const user = await this.userRepository.findOneBy({ identification: cedula });

      if (user) entity.user = user;

      entity.metaA1 = '4';
      entity.metaA2 = '4';
      entity.metaB1 = '0';
      entity.metaB2 = '100';
      entity.metaC1 = '20';
      entity.metaC2 = '0';
      entity.habilitado = row
        .getCell(headerMap['habilitado'])
        .value?.toString();
      entity.direccionZonal = row
        .getCell(headerMap['direccionZonal'])
        .value?.toString();
      entity.provincia = row.getCell(headerMap['provincia']).value?.toString();
      entity.cedula = row.getCell(headerMap['cedula']).value?.toString();
      entity.nombres = row.getCell(headerMap['nombres']).value?.toString();
      entity.actividad = row.getCell(headerMap['actividad']).value?.toString();
      entity.curso = row.getCell(headerMap['curso']).value?.toString();
      entity.actividadA1 = row
        .getCell(headerMap['actividadA1'])
        .value?.toString();
      entity.actividadA2 = row
        .getCell(headerMap['actividadA2'])
        .value?.toString();
      entity.actividadB1 = row
        .getCell(headerMap['actividadB1'])
        .value?.toString();
      entity.actividadB2 = row
        .getCell(headerMap['actividadB2'])
        .value?.toString();
      entity.cantidadA1 = row
        .getCell(headerMap['cantidadA1'])
        .value?.toString();
      entity.cantidadA2 = row
        .getCell(headerMap['cantidadA2'])
        .value?.toString();
      entity.cantidadB1 = row
        .getCell(headerMap['cantidadB1'])
        .value?.toString();
      entity.cantidadB2 = row
        .getCell(headerMap['cantidadB2'])
        .value?.toString();
      entity.cantidadC1 = row
        .getCell(headerMap['cantidadC1'])
        .value?.toString();
      entity.cantidadC2 = row
        .getCell(headerMap['cantidadC2'])
        .value?.toString();
      entity.cumple = row.getCell(headerMap['cumple']).value?.toString();
      entity.totalCantidadAbril = row
        .getCell(headerMap['totalCantidadAbril'])
        .value?.toString();
      entity.totalCantidadMayo = row
        .getCell(headerMap['totalCantidadMayo'])
        .value?.toString();

      await this.repository.save(entity);
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
