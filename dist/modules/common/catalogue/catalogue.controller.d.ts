import { ResponseHttpModel } from '@shared/interfaces';
import { CataloguesService } from '@modules/common/catalogue/catalogue.service';
import { CreateCatalogueDto, FilterCatalogueDto, UpdateCatalogueDto } from '@modules/common/catalogue/dto';
import { CatalogueEntity } from '@modules/common/catalogue/catalogue.entity';
import { CatalogueTypeEnum } from '@shared/enums';
export declare class CatalogueController {
    private catalogueService;
    constructor(catalogueService: CataloguesService);
    create(payload: CreateCatalogueDto): Promise<{
        data: CatalogueEntity;
        message: string;
    }>;
    catalogue(type: CatalogueTypeEnum): Promise<ResponseHttpModel>;
    findAll(params: FilterCatalogueDto): Promise<{
        data: any;
        pagination: any;
        message: string;
    }>;
    findOne(id: string): Promise<ResponseHttpModel>;
    update(id: string, payload: UpdateCatalogueDto): Promise<ResponseHttpModel>;
    remove(id: string): Promise<{
        data: CatalogueEntity;
        message: string;
        title: string;
    }>;
    removeAll(payload: CatalogueEntity[]): Promise<{
        data: CatalogueEntity[];
        message: string;
        title: string;
    }>;
    findCache(): Promise<ResponseHttpModel>;
    loadCache(): Promise<ResponseHttpModel>;
}
