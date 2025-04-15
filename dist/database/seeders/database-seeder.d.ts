import { MenusSeeder, RolesSeeder, UsersSeeder } from '@database/seeders';
import { CataloguesSeeder } from '@database/seeders/catalogues-seeder';
export declare class DatabaseSeeder {
    private cataloguesSeeder;
    private usersSeeder;
    private rolesSeeder;
    private menusSeeder;
    constructor(cataloguesSeeder: CataloguesSeeder, usersSeeder: UsersSeeder, rolesSeeder: RolesSeeder, menusSeeder: MenusSeeder);
    run(): Promise<void>;
    createUploadsDirectories(): void;
}
