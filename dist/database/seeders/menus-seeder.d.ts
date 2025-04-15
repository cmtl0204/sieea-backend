import { MenusService, RolesService } from '@auth/services';
export declare class MenusSeeder {
    private menusService;
    private rolesService;
    constructor(menusService: MenusService, rolesService: RolesService);
    run(): Promise<void>;
    private createMenus;
    private createMenuRole;
}
