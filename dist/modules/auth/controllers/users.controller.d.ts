import { CreateUserDto, FilterUserDto, UpdateUserDto } from '@auth/dto';
import { UserEntity } from '@auth/entities';
import { ResponseHttpModel } from '@shared/interfaces';
import { UsersService } from '../services/users.service';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    create(payload: CreateUserDto): Promise<ResponseHttpModel>;
    catalogue(): Promise<ResponseHttpModel>;
    findAll(params: FilterUserDto): Promise<ResponseHttpModel>;
    findOne(id: string): Promise<ResponseHttpModel>;
    update(id: string, payload: UpdateUserDto): Promise<ResponseHttpModel>;
    reactivate(id: string): Promise<ResponseHttpModel>;
    remove(id: string): Promise<ResponseHttpModel>;
    removeAll(payload: UserEntity[]): Promise<ResponseHttpModel>;
    suspend(id: string): Promise<ResponseHttpModel>;
    findPersonalInformation(id: string): Promise<ResponseHttpModel>;
    findBankDetail(id: string): Promise<ResponseHttpModel>;
    updatePersonalInformation(id: string, payload: any): Promise<ResponseHttpModel>;
    updateBankDetail(id: string, payload: any): Promise<ResponseHttpModel>;
    updateEmail(id: string, payload: any): Promise<ResponseHttpModel>;
}
