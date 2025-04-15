import { RolesService } from '@auth/services';
import { CataloguesService } from '@modules/common/catalogue/catalogue.service';
import { UsersService } from '@auth/services/users.service';
export declare class UsersSeeder {
    private rolesService;
    private usersService;
    private cataloguesService;
    private identificationTypes;
    private roles;
    private nationalities;
    private genders;
    constructor(rolesService: RolesService, usersService: UsersService, cataloguesService: CataloguesService);
    run(): Promise<void>;
    loadRoles(): Promise<void>;
    loadCatalogues(): Promise<void>;
    createUsers(): Promise<void>;
}
