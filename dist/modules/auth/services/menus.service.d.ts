import { Repository } from 'typeorm';
import { MenuEntity, RoleEntity } from '@auth/entities';
import { ServiceResponseHttpModel } from '@shared/interfaces';
import { CreateMenuDto, FilterMenuDto, UpdateMenuDto } from '@auth/dto';
export declare class MenusService {
    private repository;
    private roleRepository;
    constructor(repository: Repository<MenuEntity>, roleRepository: Repository<RoleEntity>);
    create(payload: CreateMenuDto): Promise<ServiceResponseHttpModel>;
    catalogue(): Promise<ServiceResponseHttpModel>;
    getMenusForSidebar(): Promise<ServiceResponseHttpModel>;
    getMenusByRole(roleId: string): Promise<ServiceResponseHttpModel>;
    findAll(params?: FilterMenuDto): Promise<ServiceResponseHttpModel>;
    findOne(id: string): Promise<ServiceResponseHttpModel>;
    update(id: string, payload: UpdateMenuDto): Promise<ServiceResponseHttpModel>;
    remove(id: string): Promise<ServiceResponseHttpModel>;
    removeAll(payload: MenuEntity[]): Promise<ServiceResponseHttpModel>;
    private paginateAndFilter;
}
