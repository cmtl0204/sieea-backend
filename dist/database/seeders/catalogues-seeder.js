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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CataloguesSeeder = void 0;
const common_1 = require("@nestjs/common");
const catalogue_service_1 = require("../../modules/common/catalogue/catalogue.service");
const enums_1 = require("../../shared/enums");
let CataloguesSeeder = class CataloguesSeeder {
    catalogueService;
    constructor(catalogueService) {
        this.catalogueService = catalogueService;
    }
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
    async createBloodTypeCatalogues() {
        const catalogues = [];
        catalogues.push({
            code: 'a+',
            description: 'tipo de sangre',
            name: 'A+',
            sort: 1,
            state: enums_1.CatalogueStateEnum.ENABLED,
            type: enums_1.CatalogueTypeEnum.BLOOD_TYPE,
        }, {
            code: 'a-',
            description: 'tipo de sangre',
            name: 'A-',
            sort: 2,
            state: enums_1.CatalogueStateEnum.ENABLED,
            type: enums_1.CatalogueTypeEnum.BLOOD_TYPE,
        }, {
            code: 'b+',
            description: 'tipo de sangre',
            name: 'B+',
            sort: 3,
            state: enums_1.CatalogueStateEnum.ENABLED,
            type: enums_1.CatalogueTypeEnum.BLOOD_TYPE,
        }, {
            code: 'b-',
            description: 'tipo de sangre',
            name: 'B-',
            sort: 4,
            state: enums_1.CatalogueStateEnum.ENABLED,
            type: enums_1.CatalogueTypeEnum.BLOOD_TYPE,
        }, {
            code: 'ab+',
            description: 'tipo de sangre',
            name: 'AB+',
            sort: 5,
            state: enums_1.CatalogueStateEnum.ENABLED,
            type: enums_1.CatalogueTypeEnum.BLOOD_TYPE,
        }, {
            code: 'ab-',
            description: 'tipo de sangre',
            name: 'AB-',
            sort: 6,
            state: enums_1.CatalogueStateEnum.ENABLED,
            type: enums_1.CatalogueTypeEnum.BLOOD_TYPE,
        }, {
            code: 'o+',
            description: 'tipo de sangre',
            name: 'O+',
            sort: 7,
            state: enums_1.CatalogueStateEnum.ENABLED,
            type: enums_1.CatalogueTypeEnum.BLOOD_TYPE,
        }, {
            code: 'o-',
            description: 'tipo de sangre',
            name: 'O-',
            sort: 8,
            state: enums_1.CatalogueStateEnum.ENABLED,
            type: enums_1.CatalogueTypeEnum.BLOOD_TYPE,
        });
        for (const catalogue of catalogues) {
            await this.catalogueService.create(catalogue);
        }
    }
    async createEthnicOriginCatalogues() {
        const catalogues = [];
        catalogues.push({
            code: enums_1.CatalogueEthnicOriginEnum.INDIGENOUS,
            description: 'etnia',
            name: 'Indígena',
            sort: 1,
            state: enums_1.CatalogueStateEnum.ENABLED,
            type: enums_1.CatalogueTypeEnum.ETHNIC_ORIGIN,
        }, {
            code: enums_1.CatalogueEthnicOriginEnum.AFRO_ECUADORIAN,
            description: 'etnia',
            name: 'Afroecuatoriano',
            sort: 1,
            state: enums_1.CatalogueStateEnum.ENABLED,
            type: enums_1.CatalogueTypeEnum.ETHNIC_ORIGIN,
        }, {
            code: enums_1.CatalogueEthnicOriginEnum.MONTUBIO,
            description: 'etnia',
            name: 'Montubio',
            sort: 1,
            state: enums_1.CatalogueStateEnum.ENABLED,
            type: enums_1.CatalogueTypeEnum.ETHNIC_ORIGIN,
        }, {
            code: enums_1.CatalogueEthnicOriginEnum.HALF_BLOOD,
            description: 'etnia',
            name: 'Mestizo',
            sort: 1,
            state: enums_1.CatalogueStateEnum.ENABLED,
            type: enums_1.CatalogueTypeEnum.ETHNIC_ORIGIN,
        }, {
            code: enums_1.CatalogueEthnicOriginEnum.WHITE,
            description: 'etnia',
            name: 'Blanco',
            sort: 1,
            state: enums_1.CatalogueStateEnum.ENABLED,
            type: enums_1.CatalogueTypeEnum.ETHNIC_ORIGIN,
        });
        for (const catalogue of catalogues) {
            await this.catalogueService.create(catalogue);
        }
    }
    async createIdentificationTypeCatalogues() {
        const catalogues = [];
        catalogues.push({
            code: '1',
            description: 'tipo de identificacion',
            name: 'Cédula',
            sort: 1,
            state: enums_1.CatalogueStateEnum.ENABLED,
            type: enums_1.CatalogueTypeEnum.IDENTIFICATION_TYPE,
        }, {
            code: '2',
            description: 'tipo de identificacion',
            name: 'Pasaporte',
            sort: 1,
            state: enums_1.CatalogueStateEnum.ENABLED,
            type: enums_1.CatalogueTypeEnum.IDENTIFICATION_TYPE,
        });
        for (const catalogue of catalogues) {
            await this.catalogueService.create(catalogue);
        }
    }
    async createGenderCatalogues() {
        const catalogues = [];
        catalogues.push({
            code: 'm',
            description: 'genero',
            name: 'Masculino',
            sort: 1,
            state: enums_1.CatalogueStateEnum.ENABLED,
            type: enums_1.CatalogueTypeEnum.GENDER,
        }, {
            code: 'f',
            description: 'tipo de identificacion',
            name: 'Femenino',
            sort: 2,
            state: enums_1.CatalogueStateEnum.ENABLED,
            type: enums_1.CatalogueTypeEnum.GENDER,
        }, {
            code: 'lgbti',
            description: '',
            name: 'LGBTI',
            sort: 3,
            state: enums_1.CatalogueStateEnum.ENABLED,
            type: enums_1.CatalogueTypeEnum.GENDER,
        }, {
            code: 'other',
            description: '',
            name: 'Otro',
            sort: 4,
            state: enums_1.CatalogueStateEnum.ENABLED,
            type: enums_1.CatalogueTypeEnum.GENDER,
        });
        for (const catalogue of catalogues) {
            await this.catalogueService.create(catalogue);
        }
    }
    async createMaritalStatusCatalogues() {
        const catalogues = [];
        catalogues.push({
            code: enums_1.CatalogueMaritalStatusEnum.SINGLE,
            description: 'estado civil',
            name: 'Soltero/a',
            sort: 1,
            state: enums_1.CatalogueStateEnum.ENABLED,
            type: enums_1.CatalogueTypeEnum.MARITAL_STATUS,
        }, {
            code: enums_1.CatalogueMaritalStatusEnum.MARRIED,
            description: 'estado civil',
            name: 'Casado/a',
            sort: 2,
            state: enums_1.CatalogueStateEnum.ENABLED,
            type: enums_1.CatalogueTypeEnum.MARITAL_STATUS,
        }, {
            code: enums_1.CatalogueMaritalStatusEnum.DIVORCED,
            description: 'estado civil',
            name: 'Divorciado/a',
            sort: 3,
            state: enums_1.CatalogueStateEnum.ENABLED,
            type: enums_1.CatalogueTypeEnum.MARITAL_STATUS,
        }, {
            code: enums_1.CatalogueMaritalStatusEnum.FREE_UNION,
            description: 'estado civil',
            name: 'Unión libre',
            sort: 4,
            state: enums_1.CatalogueStateEnum.ENABLED,
            type: enums_1.CatalogueTypeEnum.MARITAL_STATUS,
        }, {
            code: enums_1.CatalogueMaritalStatusEnum.WIDOWER,
            description: 'estado civil',
            name: 'Viudo/a',
            sort: 5,
            state: enums_1.CatalogueStateEnum.ENABLED,
            type: enums_1.CatalogueTypeEnum.MARITAL_STATUS,
        });
        for (const catalogue of catalogues) {
            await this.catalogueService.create(catalogue);
        }
    }
    async createSexCatalogues() {
        const catalogues = [];
        catalogues.push({
            code: '1',
            description: 'sexo',
            name: 'Hombre',
            sort: 1,
            state: enums_1.CatalogueStateEnum.ENABLED,
            type: enums_1.CatalogueTypeEnum.SEX,
        }, {
            code: '2',
            description: 'sexo',
            name: 'Mujer',
            sort: 1,
            state: enums_1.CatalogueStateEnum.ENABLED,
            type: enums_1.CatalogueTypeEnum.SEX,
        });
        for (const catalogue of catalogues) {
            await this.catalogueService.create(catalogue);
        }
    }
    async createYesNoCatalogues() {
        const catalogues = [];
        catalogues.push({
            code: '1',
            description: 'Si o No',
            name: 'Sí',
            sort: 1,
            state: enums_1.CatalogueStateEnum.ENABLED,
            type: enums_1.CatalogueTypeEnum.YES_NO,
        }, {
            code: '2',
            description: 'Si o No',
            name: 'No',
            sort: 1,
            state: enums_1.CatalogueStateEnum.ENABLED,
            type: enums_1.CatalogueTypeEnum.YES_NO,
        });
        for (const catalogue of catalogues) {
            await this.catalogueService.create(catalogue);
        }
    }
    async createYesNoNACatalogues() {
        const catalogues = [];
        catalogues.push({
            code: '1',
            description: 'Si, No y No aplica',
            name: 'Si',
            sort: 1,
            state: enums_1.CatalogueStateEnum.ENABLED,
            type: enums_1.CatalogueTypeEnum.YES_NO_NA,
        }, {
            code: '2',
            description: 'Si, No y No aplica',
            name: 'No',
            sort: 1,
            state: enums_1.CatalogueStateEnum.ENABLED,
            type: enums_1.CatalogueTypeEnum.YES_NO_NA,
        }, {
            code: '3',
            description: 'Si, No y No aplica',
            name: 'No apliaca',
            sort: 1,
            state: enums_1.CatalogueStateEnum.ENABLED,
            type: enums_1.CatalogueTypeEnum.YES_NO_NA,
        });
        for (const catalogue of catalogues) {
            await this.catalogueService.create(catalogue);
        }
    }
    async createNationalityCatalogues() {
        const catalogues = [];
        catalogues.push({
            code: 'ecu',
            description: 'Ecuatoriana',
            name: 'Ecuatoriana',
            sort: 1,
            state: enums_1.CatalogueStateEnum.ENABLED,
            type: enums_1.CatalogueTypeEnum.NATIONALITY,
        }, {
            code: 'col',
            description: 'Colombiana',
            name: 'Colombiana',
            sort: 2,
            state: enums_1.CatalogueStateEnum.ENABLED,
            type: enums_1.CatalogueTypeEnum.NATIONALITY,
        }, {
            code: 'per',
            description: 'Peruana',
            name: 'Peruana',
            sort: 3,
            state: enums_1.CatalogueStateEnum.ENABLED,
            type: enums_1.CatalogueTypeEnum.NATIONALITY,
        }, {
            code: 'ven',
            description: 'Venezolana',
            name: 'Venezolana',
            sort: 4,
            state: enums_1.CatalogueStateEnum.ENABLED,
            type: enums_1.CatalogueTypeEnum.NATIONALITY,
        }, {
            code: 'chl',
            description: 'Chilena',
            name: 'Chilena',
            sort: 5,
            state: enums_1.CatalogueStateEnum.ENABLED,
            type: enums_1.CatalogueTypeEnum.NATIONALITY,
        }, {
            code: 'arg',
            description: 'Argentina',
            name: 'Argentina',
            sort: 6,
            state: enums_1.CatalogueStateEnum.ENABLED,
            type: enums_1.CatalogueTypeEnum.NATIONALITY,
        }, {
            code: 'bra',
            description: 'Brasileña',
            name: 'Brasileña',
            sort: 7,
            state: enums_1.CatalogueStateEnum.ENABLED,
            type: enums_1.CatalogueTypeEnum.NATIONALITY,
        }, {
            code: 'ury',
            description: 'Uruguaya',
            name: 'Uruguaya',
            sort: 8,
            state: enums_1.CatalogueStateEnum.ENABLED,
            type: enums_1.CatalogueTypeEnum.NATIONALITY,
        }, {
            code: 'pry',
            description: 'Paraguaya',
            name: 'Paraguaya',
            sort: 9,
            state: enums_1.CatalogueStateEnum.ENABLED,
            type: enums_1.CatalogueTypeEnum.NATIONALITY,
        }, {
            code: 'bol',
            description: 'Boliviana',
            name: 'Boliviana',
            sort: 10,
            state: enums_1.CatalogueStateEnum.ENABLED,
            type: enums_1.CatalogueTypeEnum.NATIONALITY,
        }, {
            code: 'cri',
            description: 'Costarricense',
            name: 'Costarricense',
            sort: 11,
            state: enums_1.CatalogueStateEnum.ENABLED,
            type: enums_1.CatalogueTypeEnum.NATIONALITY,
        }, {
            code: 'cun',
            description: 'Cubana',
            name: 'Cubana',
            sort: 12,
            state: enums_1.CatalogueStateEnum.ENABLED,
            type: enums_1.CatalogueTypeEnum.NATIONALITY,
        }, {
            code: 'slv',
            description: 'Salvadoreña',
            name: 'Salvadoreña',
            sort: 13,
            state: enums_1.CatalogueStateEnum.ENABLED,
            type: enums_1.CatalogueTypeEnum.NATIONALITY,
        }, {
            code: 'gtm',
            description: 'Guatemalteca',
            name: 'Guatemalteca',
            sort: 14,
            state: enums_1.CatalogueStateEnum.ENABLED,
            type: enums_1.CatalogueTypeEnum.NATIONALITY,
        }, {
            code: 'mex',
            description: 'Mexicana',
            name: 'Mexicana',
            sort: 15,
            state: enums_1.CatalogueStateEnum.ENABLED,
            type: enums_1.CatalogueTypeEnum.NATIONALITY,
        }, {
            code: 'hti',
            description: 'Haitiana',
            name: 'Haitiana',
            sort: 16,
            state: enums_1.CatalogueStateEnum.ENABLED,
            type: enums_1.CatalogueTypeEnum.NATIONALITY,
        }, {
            code: 'nic',
            description: 'Nicaraguense',
            name: 'Nicaraguense',
            sort: 17,
            state: enums_1.CatalogueStateEnum.ENABLED,
            type: enums_1.CatalogueTypeEnum.NATIONALITY,
        }, {
            code: 'usa',
            description: 'Estado Unidense',
            name: 'Estado Unidense',
            sort: 18,
            state: enums_1.CatalogueStateEnum.ENABLED,
            type: enums_1.CatalogueTypeEnum.NATIONALITY,
        }, {
            code: 'can',
            description: 'Canadiense',
            name: 'Canadiense',
            sort: 19,
            state: enums_1.CatalogueStateEnum.ENABLED,
            type: enums_1.CatalogueTypeEnum.NATIONALITY,
        }, {
            code: 'other',
            description: 'Otra',
            name: 'Otra',
            sort: 20,
            state: enums_1.CatalogueStateEnum.ENABLED,
            type: enums_1.CatalogueTypeEnum.NATIONALITY,
        });
        for (const catalogue of catalogues) {
            await this.catalogueService.create(catalogue);
        }
    }
};
exports.CataloguesSeeder = CataloguesSeeder;
exports.CataloguesSeeder = CataloguesSeeder = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [catalogue_service_1.CataloguesService])
], CataloguesSeeder);
//# sourceMappingURL=catalogues-seeder.js.map