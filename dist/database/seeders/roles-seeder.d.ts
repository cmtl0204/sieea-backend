import { RolesService } from '@auth/services';
export declare class RolesSeeder {
    private rolesService;
    constructor(rolesService: RolesService);
    run(): Promise<void>;
    private createRoles;
}
