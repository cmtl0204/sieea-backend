import { CreateRoleDto, FilterRoleDto, UpdateRoleDto } from '@auth/dto';
import { RoleEntity } from '@auth/entities';
import { ResponseHttpModel } from '@shared/interfaces';
import { RolesService } from '@auth/services';
export declare class RolesController {
    private rolesService;
    constructor(rolesService: RolesService);
    create(payload: CreateRoleDto): Promise<ResponseHttpModel>;
    catalogue(): Promise<ResponseHttpModel>;
    findAll(params: FilterRoleDto): Promise<ResponseHttpModel>;
    findOne(id: string): Promise<ResponseHttpModel>;
    update(id: string, payload: UpdateRoleDto): Promise<ResponseHttpModel>;
    remove(id: string): Promise<ResponseHttpModel>;
    removeAll(payload: RoleEntity[]): Promise<ResponseHttpModel>;
}
