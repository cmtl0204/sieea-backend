import { CataloguesService } from '@modules/common/catalogue/catalogue.service';
export declare class CataloguesSeeder {
    private catalogueService;
    constructor(catalogueService: CataloguesService);
    run(): Promise<void>;
    private createBloodTypeCatalogues;
    private createEthnicOriginCatalogues;
    private createIdentificationTypeCatalogues;
    private createGenderCatalogues;
    private createMaritalStatusCatalogues;
    private createSexCatalogues;
    private createYesNoCatalogues;
    private createYesNoNACatalogues;
    private createNationalityCatalogues;
}
