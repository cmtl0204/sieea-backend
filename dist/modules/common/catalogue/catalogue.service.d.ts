import { Repository } from 'typeorm';
import { CreateCatalogueDto, FilterCatalogueDto, UpdateCatalogueDto } from '@modules/common/catalogue/dto';
import { CatalogueEntity } from '@modules/common/catalogue/catalogue.entity';
import { CatalogueTypeEnum } from '@shared/enums';
import { ServiceResponseHttpModel } from '@shared/interfaces';
import { Cache } from 'cache-manager';
export declare class CataloguesService {
    private repository;
    private readonly cacheManager;
    clientRedis: any;
    constructor(repository: Repository<CatalogueEntity>, cacheManager: Cache);
    create(payload: CreateCatalogueDto): Promise<CatalogueEntity>;
    catalogue(type: CatalogueTypeEnum): Promise<CatalogueEntity[]>;
    findAll(params?: FilterCatalogueDto): Promise<ServiceResponseHttpModel>;
    findOne(id: string): Promise<CatalogueEntity>;
    findByCode(code: string): Promise<CatalogueEntity>;
    findByType(type: string): Promise<CatalogueEntity[]>;
    update(id: string, payload: UpdateCatalogueDto): Promise<CatalogueEntity>;
    remove(id: string): Promise<CatalogueEntity>;
    removeAll(payload: CatalogueEntity[]): Promise<CatalogueEntity[]>;
    private paginateAndFilter;
    findCache(): Promise<CatalogueEntity[]>;
    loadCache(): Promise<CatalogueEntity[]>;
}
