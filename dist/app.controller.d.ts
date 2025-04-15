import { ResponseHttpModel } from '@shared/interfaces';
import { DatabaseSeeder } from '@database/seeders';
export declare class AppController {
    private readonly databaseSeeder;
    constructor(databaseSeeder: DatabaseSeeder);
    init(): Promise<ResponseHttpModel>;
}
