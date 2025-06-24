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
      take: 500,
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

      const user = await this.userRepository.findOneBy({
        identification: cedula,
      });

      if (user) entity.user = user;

      entity.metaA1 = '4';
      entity.metaA2 = '4';
      entity.metaB1 = '0';
      entity.metaB2 = '100';
      entity.metaC1 = '20';
      entity.metaC2 = '0';

      if (cedula) entity.cedula = cedula;

      const habilitado = row.getCell(headerMap['habilitado']).value?.toString();
      if (habilitado) entity.habilitado = habilitado;

      const direccionZonal = row
        .getCell(headerMap['direccionZonal'])
        .value?.toString();
      if (direccionZonal) entity.direccionZonal = direccionZonal;

      const provincia = row.getCell(headerMap['provincia']).value?.toString();
      if (provincia) entity.provincia = provincia;

      const nombres = row.getCell(headerMap['nombres']).value?.toString();
      if (nombres) entity.nombres = nombres;

      const actividad = row.getCell(headerMap['actividad']).value?.toString();
      if (actividad) entity.actividad = actividad;

      const curso = row.getCell(headerMap['curso']).value?.toString();
      if (curso) entity.curso = curso;

      const actividadA1 = row
        .getCell(headerMap['actividadA1'])
        .value?.toString();
      if (actividadA1) entity.actividadA1 = actividadA1;

      const actividadA2 = row
        .getCell(headerMap['actividadA2'])
        .value?.toString();
      if (actividadA2) entity.actividadA2 = actividadA2;

      const actividadB1 = row
        .getCell(headerMap['actividadB1'])
        .value?.toString();
      if (actividadB1) entity.actividadB1 = actividadB1;

      const actividadB2 = row
        .getCell(headerMap['actividadB2'])
        .value?.toString();
      if (actividadB2) entity.actividadB2 = actividadB2;

      const cantidadA1 = row.getCell(headerMap['cantidadA1']).value?.toString();
      if (cantidadA1) entity.cantidadA1 = cantidadA1;

      const cantidadA2 = row.getCell(headerMap['cantidadA2']).value?.toString();
      if (cantidadA2) entity.cantidadA2 = cantidadA2;

      const cantidadB1 = row.getCell(headerMap['cantidadB1']).value?.toString();
      if (cantidadB1) entity.cantidadB1 = cantidadB1;

      const cantidadB2 = row.getCell(headerMap['cantidadB2']).value?.toString();
      if (cantidadB2) entity.cantidadB2 = cantidadB2;

      const cantidadC1 = row.getCell(headerMap['cantidadC1']).value?.toString();
      if (cantidadC1) entity.cantidadC1 = cantidadC1;

      const cantidadC2 = row.getCell(headerMap['cantidadC2']).value?.toString();
      if (cantidadC2) entity.cantidadC2 = cantidadC2;

      const cumple = row.getCell(headerMap['cumple']).value?.toString();
      if (cumple) entity.cumple = cumple;

      const totalCantidadAbril = row
        .getCell(headerMap['totalCantidadAbril'])
        .value?.toString();
      if (totalCantidadAbril) entity.totalCantidadAbril = totalCantidadAbril;

      const totalCantidadMayo = row
        .getCell(headerMap['totalCantidadMayo'])
        .value?.toString();
      if (totalCantidadMayo) entity.totalCantidadMayo = totalCantidadMayo;

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
