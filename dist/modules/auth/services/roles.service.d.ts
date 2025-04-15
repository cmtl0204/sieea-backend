import { Repository } from 'typeorm';
import { RoleEntity } from '@auth/entities';
import { ServiceResponseHttpModel } from '@shared/interfaces';
import { CreateRoleDto, FilterRoleDto, UpdateRoleDto } from '@auth/dto';
export declare class RolesService {
    private repository;
    constructor(repository: Repository<RoleEntity>);
    create(payload: CreateRoleDto): Promise<ServiceResponseHttpModel>;
    createMenus(role: RoleEntity): Promise<RoleEntity>;
    catalogue(): Promise<ServiceResponseHttpModel>;
    findAll(params?: FilterRoleDto): Promise<ServiceResponseHttpModel>;
    findOne(id: string): Promise<ServiceResponseHttpModel>;
    findByCode(code: string): Promise<RoleEntity>;
    update(id: string, payload: UpdateRoleDto): Promise<ServiceResponseHttpModel>;
    remove(id: string): Promise<ServiceResponseHttpModel>;
    removeAll(payload: RoleEntity[]): Promise<ServiceResponseHttpModel>;
    private paginateAndFilter;
}
