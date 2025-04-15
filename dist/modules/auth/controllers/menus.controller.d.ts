import { CreateMenuDto, FilterMenuDto, UpdateMenuDto } from '@auth/dto';
import { MenuEntity } from '@auth/entities';
import { ResponseHttpModel } from '@shared/interfaces';
import { MenusService } from '@auth/services';
export declare class MenusController {
    private menusService;
    constructor(menusService: MenusService);
    create(payload: CreateMenuDto): Promise<ResponseHttpModel>;
    catalogue(): Promise<ResponseHttpModel>;
    getMenusForSidebar(): Promise<ResponseHttpModel>;
    getMenusByRole(roleId: string): Promise<ResponseHttpModel>;
    findAll(params: FilterMenuDto): Promise<ResponseHttpModel>;
    findOne(id: string): Promise<ResponseHttpModel>;
    update(id: string, payload: UpdateMenuDto): Promise<ResponseHttpModel>;
    remove(id: string): Promise<ResponseHttpModel>;
    removeAll(payload: MenuEntity[]): Promise<ResponseHttpModel>;
}
