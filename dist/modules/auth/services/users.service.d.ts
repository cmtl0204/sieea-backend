import { Repository } from 'typeorm';
import { CreateUserDto, FilterUserDto, ReadUserDto, UpdateUserDto } from '@auth/dto';
import { UserEntity } from '@auth/entities';
import { ServiceResponseHttpModel } from '@shared/interfaces';
import { AddressEntity } from '@auth/entities/address.entity';
import { AdditionalInformationEntity } from '@auth/entities/additional-information.entity';
export declare class UsersService {
    private repository;
    private addressRepository;
    private additionalInformationRepository;
    constructor(repository: Repository<UserEntity>, addressRepository: Repository<AddressEntity>, additionalInformationRepository: Repository<AdditionalInformationEntity>);
    create(payload: CreateUserDto): Promise<UserEntity>;
    catalogue(): Promise<ServiceResponseHttpModel>;
    findAll(params?: FilterUserDto): Promise<ServiceResponseHttpModel>;
    findOne(id: string): Promise<UserEntity>;
    findPersonalInformation(id: string): Promise<UserEntity>;
    findBankDetail(id: string): Promise<UserEntity>;
    findByUsername(username: string): Promise<UserEntity>;
    update(id: string, payload: UpdateUserDto): Promise<UserEntity>;
    reactivate(id: string): Promise<ReadUserDto>;
    remove(id: string): Promise<ReadUserDto>;
    removeAll(payload: UserEntity[]): Promise<UserEntity>;
    private paginateAndFilter;
    private filterByBirthdate;
    suspend(id: string): Promise<ReadUserDto>;
    updatePersonalInformation(id: string, payload: any): Promise<UserEntity>;
    updateBankDetail(id: string, payload: any): Promise<UserEntity>;
    updateEmail(id: string, payload: any): Promise<UserEntity>;
}
