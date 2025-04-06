import { Injectable } from '@nestjs/common';
import { faker } from '@faker-js/faker';
import { CatalogueTypeEnum } from '@shared/enums';
import { RoleEntity } from '@auth/entities';
import { RoleEnum } from '@auth/enums';
import { RolesService } from '@auth/services';
import { CatalogueEntity } from '@modules/common/catalogue/catalogue.entity';
import { CataloguesService } from '@modules/common/catalogue/catalogue.service';
// import * as XLSX from 'xlsx';
import { UsersService } from '@auth/services/users.service';

@Injectable()
export class UsersSeeder {
  private identificationTypes: CatalogueEntity[] = [];
  private roles: RoleEntity[] = [];
  private nationalities: CatalogueEntity[] = [];
  private genders: CatalogueEntity[] = [];

  constructor(
    private rolesService: RolesService,
    private usersService: UsersService,
    private cataloguesService: CataloguesService,
  ) {}

  async run() {
    await this.loadRoles();
    await this.loadCatalogues();
    await this.createUsers();
  }

  async loadRoles() {
    this.roles = (await this.rolesService.findAll()).data as RoleEntity[];
  }

  async loadCatalogues() {
    const catalogues = (await this.cataloguesService.findAll())
      .data as CatalogueEntity[];

    this.identificationTypes = catalogues.filter(
      (catalogue) => catalogue.type === CatalogueTypeEnum.IDENTIFICATION_TYPE,
    );

    this.nationalities = catalogues.filter(
      (catalogue) => catalogue.type === CatalogueTypeEnum.NATIONALITY,
    );

    this.genders = catalogues.filter(
      (catalogue) => catalogue.type === CatalogueTypeEnum.GENDER,
    );
  }

  async createUsers() {
    const users: any[] = [];

    const adminRole = this.roles.find((role) => role.code === RoleEnum.ADMIN);

    users.push({
      birthdate: faker.date.birthdate(),
      cellPhone: '0987654321',
      identification: 'user1',
      email: 'admin@correo.com',
      lastname: 'Perez',
      name: 'Admin',
      password: 'admin',
      passwordChanged: false,
      personalEmail: faker.internet.email(),
      roles: [adminRole],
      username: 'admin',
      nationality: this.nationalities.find((item) => item.code === 'ecu'),
      gender: this.genders.find((item) => item.code === 'm'),
    });

    for (const user of users) {
      await this.usersService.create(user);
    }
  }
}
