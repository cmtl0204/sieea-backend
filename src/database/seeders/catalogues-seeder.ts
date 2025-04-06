import { Injectable } from '@nestjs/common';
import {
  CreateCatalogueDto,
  SeedCatalogueDto,
} from '@modules/common/catalogue/dto';
import { CataloguesService } from '@modules/common/catalogue/catalogue.service';
import {
  CatalogueStateEnum,
  CatalogueTypeEnum,
  CatalogueCareersModalityEnum,
  CatalogueMaritalStatusEnum,
  CatalogueSchoolPeriodStateEnum,
  CatalogueEthnicOriginEnum,
  CatalogueTypeSchoolEnum,
  CatalogueStudentLiveEnum,
} from '@shared/enums';
import { CatalogueEntity } from '@modules/common/catalogue/catalogue.entity';
import { SeedCatalogueParentDto } from '@modules/common/catalogue/dto';

@Injectable()
export class CataloguesSeeder {
  constructor(private catalogueService: CataloguesService) {}

  async run() {
    await this.createBloodTypeCatalogues();
    await this.createEthnicOriginCatalogues();
    await this.createIdentificationTypeCatalogues();
    await this.createGenderCatalogues();
    await this.createMaritalStatusCatalogues();
    await this.createYesNoCatalogues();
    await this.createYesNoNACatalogues();
    await this.createSexCatalogues();
    await this.createNationalityCatalogues();
  }

  private async createBloodTypeCatalogues(): Promise<void> {
    const catalogues: CreateCatalogueDto[] = [];
    catalogues.push(
      {
        code: 'a+',
        description: 'tipo de sangre',
        name: 'A+',
        sort: 1,
        state: CatalogueStateEnum.ENABLED,
        type: CatalogueTypeEnum.BLOOD_TYPE,
      },
      {
        code: 'a-',
        description: 'tipo de sangre',
        name: 'A-',
        sort: 2,
        state: CatalogueStateEnum.ENABLED,
        type: CatalogueTypeEnum.BLOOD_TYPE,
      },
      {
        code: 'b+',
        description: 'tipo de sangre',
        name: 'B+',
        sort: 3,
        state: CatalogueStateEnum.ENABLED,
        type: CatalogueTypeEnum.BLOOD_TYPE,
      },
      {
        code: 'b-',
        description: 'tipo de sangre',
        name: 'B-',
        sort: 4,
        state: CatalogueStateEnum.ENABLED,
        type: CatalogueTypeEnum.BLOOD_TYPE,
      },
      {
        code: 'ab+',
        description: 'tipo de sangre',
        name: 'AB+',
        sort: 5,
        state: CatalogueStateEnum.ENABLED,
        type: CatalogueTypeEnum.BLOOD_TYPE,
      },
      {
        code: 'ab-',
        description: 'tipo de sangre',
        name: 'AB-',
        sort: 6,
        state: CatalogueStateEnum.ENABLED,
        type: CatalogueTypeEnum.BLOOD_TYPE,
      },
      {
        code: 'o+',
        description: 'tipo de sangre',
        name: 'O+',
        sort: 7,
        state: CatalogueStateEnum.ENABLED,
        type: CatalogueTypeEnum.BLOOD_TYPE,
      },
      {
        code: 'o-',
        description: 'tipo de sangre',
        name: 'O-',
        sort: 8,
        state: CatalogueStateEnum.ENABLED,
        type: CatalogueTypeEnum.BLOOD_TYPE,
      },
    );

    for (const catalogue of catalogues) {
      await this.catalogueService.create(catalogue);
    }
  }

  private async createEthnicOriginCatalogues() {
    const catalogues: CreateCatalogueDto[] = [];
    catalogues.push(
      {
        code: CatalogueEthnicOriginEnum.INDIGENOUS,
        description: 'etnia',
        name: 'Indígena',
        sort: 1,
        state: CatalogueStateEnum.ENABLED,
        type: CatalogueTypeEnum.ETHNIC_ORIGIN,
      },
      {
        code: CatalogueEthnicOriginEnum.AFRO_ECUADORIAN,
        description: 'etnia',
        name: 'Afroecuatoriano',
        sort: 1,
        state: CatalogueStateEnum.ENABLED,
        type: CatalogueTypeEnum.ETHNIC_ORIGIN,
      },
      {
        code: CatalogueEthnicOriginEnum.MONTUBIO,
        description: 'etnia',
        name: 'Montubio',
        sort: 1,
        state: CatalogueStateEnum.ENABLED,
        type: CatalogueTypeEnum.ETHNIC_ORIGIN,
      },
      {
        code: CatalogueEthnicOriginEnum.HALF_BLOOD,
        description: 'etnia',
        name: 'Mestizo',
        sort: 1,
        state: CatalogueStateEnum.ENABLED,
        type: CatalogueTypeEnum.ETHNIC_ORIGIN,
      },
      {
        code: CatalogueEthnicOriginEnum.WHITE,
        description: 'etnia',
        name: 'Blanco',
        sort: 1,
        state: CatalogueStateEnum.ENABLED,
        type: CatalogueTypeEnum.ETHNIC_ORIGIN,
      },
    );

    for (const catalogue of catalogues) {
      await this.catalogueService.create(catalogue);
    }
  }

  private async createIdentificationTypeCatalogues() {
    const catalogues: CreateCatalogueDto[] = [];
    catalogues.push(
      {
        code: '1',
        description: 'tipo de identificacion',
        name: 'Cédula',
        sort: 1,
        state: CatalogueStateEnum.ENABLED,
        type: CatalogueTypeEnum.IDENTIFICATION_TYPE,
      },
      {
        code: '2',
        description: 'tipo de identificacion',
        name: 'Pasaporte',
        sort: 1,
        state: CatalogueStateEnum.ENABLED,
        type: CatalogueTypeEnum.IDENTIFICATION_TYPE,
      },
    );

    for (const catalogue of catalogues) {
      await this.catalogueService.create(catalogue);
    }
  }

  private async createGenderCatalogues() {
    const catalogues: CreateCatalogueDto[] = [];
    catalogues.push(
      {
        code: 'm',
        description: 'genero',
        name: 'Masculino',
        sort: 1,
        state: CatalogueStateEnum.ENABLED,
        type: CatalogueTypeEnum.GENDER,
      },
      {
        code: 'f',
        description: 'tipo de identificacion',
        name: 'Femenino',
        sort: 2,
        state: CatalogueStateEnum.ENABLED,
        type: CatalogueTypeEnum.GENDER,
      },
      {
        code: 'lgbti',
        description: '',
        name: 'LGBTI',
        sort: 3,
        state: CatalogueStateEnum.ENABLED,
        type: CatalogueTypeEnum.GENDER,
      },
      {
        code: 'other',
        description: '',
        name: 'Otro',
        sort: 4,
        state: CatalogueStateEnum.ENABLED,
        type: CatalogueTypeEnum.GENDER,
      },
    );

    for (const catalogue of catalogues) {
      await this.catalogueService.create(catalogue);
    }
  }

  private async createMaritalStatusCatalogues() {
    const catalogues: CreateCatalogueDto[] = [];
    catalogues.push(
      {
        code: CatalogueMaritalStatusEnum.SINGLE,
        description: 'estado civil',
        name: 'Soltero/a',
        sort: 1,
        state: CatalogueStateEnum.ENABLED,
        type: CatalogueTypeEnum.MARITAL_STATUS,
      },
      {
        code: CatalogueMaritalStatusEnum.MARRIED,
        description: 'estado civil',
        name: 'Casado/a',
        sort: 2,
        state: CatalogueStateEnum.ENABLED,
        type: CatalogueTypeEnum.MARITAL_STATUS,
      },
      {
        code: CatalogueMaritalStatusEnum.DIVORCED,
        description: 'estado civil',
        name: 'Divorciado/a',
        sort: 3,
        state: CatalogueStateEnum.ENABLED,
        type: CatalogueTypeEnum.MARITAL_STATUS,
      },
      {
        code: CatalogueMaritalStatusEnum.FREE_UNION,
        description: 'estado civil',
        name: 'Unión libre',
        sort: 4,
        state: CatalogueStateEnum.ENABLED,
        type: CatalogueTypeEnum.MARITAL_STATUS,
      },
      {
        code: CatalogueMaritalStatusEnum.WIDOWER,
        description: 'estado civil',
        name: 'Viudo/a',
        sort: 5,
        state: CatalogueStateEnum.ENABLED,
        type: CatalogueTypeEnum.MARITAL_STATUS,
      },
    );

    for (const catalogue of catalogues) {
      await this.catalogueService.create(catalogue);
    }
  }

  private async createSexCatalogues() {
    const catalogues: CreateCatalogueDto[] = [];
    catalogues.push(
      {
        code: '1',
        description: 'sexo',
        name: 'Hombre',
        sort: 1,
        state: CatalogueStateEnum.ENABLED,
        type: CatalogueTypeEnum.SEX,
      },
      {
        code: '2',
        description: 'sexo',
        name: 'Mujer',
        sort: 1,
        state: CatalogueStateEnum.ENABLED,
        type: CatalogueTypeEnum.SEX,
      },
    );

    for (const catalogue of catalogues) {
      await this.catalogueService.create(catalogue);
    }
  }

  private async createYesNoCatalogues() {
    const catalogues: CreateCatalogueDto[] = [];
    catalogues.push(
      {
        code: '1',
        description: 'Si o No',
        name: 'Sí',
        sort: 1,
        state: CatalogueStateEnum.ENABLED,
        type: CatalogueTypeEnum.YES_NO,
      },
      {
        code: '2',
        description: 'Si o No',
        name: 'No',
        sort: 1,
        state: CatalogueStateEnum.ENABLED,
        type: CatalogueTypeEnum.YES_NO,
      },
    );

    for (const catalogue of catalogues) {
      await this.catalogueService.create(catalogue);
    }
  }

  private async createYesNoNACatalogues() {
    const catalogues: CreateCatalogueDto[] = [];
    catalogues.push(
      {
        code: '1',
        description: 'Si, No y No aplica',
        name: 'Si',
        sort: 1,
        state: CatalogueStateEnum.ENABLED,
        type: CatalogueTypeEnum.YES_NO_NA,
      },
      {
        code: '2',
        description: 'Si, No y No aplica',
        name: 'No',
        sort: 1,
        state: CatalogueStateEnum.ENABLED,
        type: CatalogueTypeEnum.YES_NO_NA,
      },
      {
        code: '3',
        description: 'Si, No y No aplica',
        name: 'No apliaca',
        sort: 1,
        state: CatalogueStateEnum.ENABLED,
        type: CatalogueTypeEnum.YES_NO_NA,
      },
    );

    for (const catalogue of catalogues) {
      await this.catalogueService.create(catalogue);
    }
  }

  private async createNationalityCatalogues() {
    const catalogues: CreateCatalogueDto[] = [];
    catalogues.push(
      {
        code: 'ecu',
        description: 'Ecuatoriana',
        name: 'Ecuatoriana',
        sort: 1,
        state: CatalogueStateEnum.ENABLED,
        type: CatalogueTypeEnum.NATIONALITY,
      },
      {
        code: 'col',
        description: 'Colombiana',
        name: 'Colombiana',
        sort: 2,
        state: CatalogueStateEnum.ENABLED,
        type: CatalogueTypeEnum.NATIONALITY,
      },
      {
        code: 'per',
        description: 'Peruana',
        name: 'Peruana',
        sort: 3,
        state: CatalogueStateEnum.ENABLED,
        type: CatalogueTypeEnum.NATIONALITY,
      },
      {
        code: 'ven',
        description: 'Venezolana',
        name: 'Venezolana',
        sort: 4,
        state: CatalogueStateEnum.ENABLED,
        type: CatalogueTypeEnum.NATIONALITY,
      },
      {
        code: 'chl',
        description: 'Chilena',
        name: 'Chilena',
        sort: 5,
        state: CatalogueStateEnum.ENABLED,
        type: CatalogueTypeEnum.NATIONALITY,
      },
      {
        code: 'arg',
        description: 'Argentina',
        name: 'Argentina',
        sort: 6,
        state: CatalogueStateEnum.ENABLED,
        type: CatalogueTypeEnum.NATIONALITY,
      },
      {
        code: 'bra',
        description: 'Brasileña',
        name: 'Brasileña',
        sort: 7,
        state: CatalogueStateEnum.ENABLED,
        type: CatalogueTypeEnum.NATIONALITY,
      },
      {
        code: 'ury',
        description: 'Uruguaya',
        name: 'Uruguaya',
        sort: 8,
        state: CatalogueStateEnum.ENABLED,
        type: CatalogueTypeEnum.NATIONALITY,
      },
      {
        code: 'pry',
        description: 'Paraguaya',
        name: 'Paraguaya',
        sort: 9,
        state: CatalogueStateEnum.ENABLED,
        type: CatalogueTypeEnum.NATIONALITY,
      },
      {
        code: 'bol',
        description: 'Boliviana',
        name: 'Boliviana',
        sort: 10,
        state: CatalogueStateEnum.ENABLED,
        type: CatalogueTypeEnum.NATIONALITY,
      },
      {
        code: 'cri',
        description: 'Costarricense',
        name: 'Costarricense',
        sort: 11,
        state: CatalogueStateEnum.ENABLED,
        type: CatalogueTypeEnum.NATIONALITY,
      },
      {
        code: 'cun',
        description: 'Cubana',
        name: 'Cubana',
        sort: 12,
        state: CatalogueStateEnum.ENABLED,
        type: CatalogueTypeEnum.NATIONALITY,
      },
      {
        code: 'slv',
        description: 'Salvadoreña',
        name: 'Salvadoreña',
        sort: 13,
        state: CatalogueStateEnum.ENABLED,
        type: CatalogueTypeEnum.NATIONALITY,
      },
      {
        code: 'gtm',
        description: 'Guatemalteca',
        name: 'Guatemalteca',
        sort: 14,
        state: CatalogueStateEnum.ENABLED,
        type: CatalogueTypeEnum.NATIONALITY,
      },
      {
        code: 'mex',
        description: 'Mexicana',
        name: 'Mexicana',
        sort: 15,
        state: CatalogueStateEnum.ENABLED,
        type: CatalogueTypeEnum.NATIONALITY,
      },
      {
        code: 'hti',
        description: 'Haitiana',
        name: 'Haitiana',
        sort: 16,
        state: CatalogueStateEnum.ENABLED,
        type: CatalogueTypeEnum.NATIONALITY,
      },
      {
        code: 'nic',
        description: 'Nicaraguense',
        name: 'Nicaraguense',
        sort: 17,
        state: CatalogueStateEnum.ENABLED,
        type: CatalogueTypeEnum.NATIONALITY,
      },
      {
        code: 'usa',
        description: 'Estado Unidense',
        name: 'Estado Unidense',
        sort: 18,
        state: CatalogueStateEnum.ENABLED,
        type: CatalogueTypeEnum.NATIONALITY,
      },
      {
        code: 'can',
        description: 'Canadiense',
        name: 'Canadiense',
        sort: 19,
        state: CatalogueStateEnum.ENABLED,
        type: CatalogueTypeEnum.NATIONALITY,
      },
      {
        code: 'other',
        description: 'Otra',
        name: 'Otra',
        sort: 20,
        state: CatalogueStateEnum.ENABLED,
        type: CatalogueTypeEnum.NATIONALITY,
      },
    );

    for (const catalogue of catalogues) {
      await this.catalogueService.create(catalogue);
    }
  }
}
