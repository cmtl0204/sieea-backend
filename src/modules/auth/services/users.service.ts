import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { FindOptionsWhere, ILike, LessThan, Repository } from 'typeorm';
import {
  CreateUserDto,
  FilterUserDto,
  ReadUserDto,
  UpdateUserDto,
} from '@auth/dto';
import { MAX_ATTEMPTS } from '@auth/constants';
import { UserEntity } from '@auth/entities';
import { PaginationDto } from '@shared/dto';
import { ServiceResponseHttpModel } from '@shared/interfaces';
import { AuthRepositoryEnum } from '@shared/enums';
import { RoleEnum } from '@auth/enums';
import { AddressEntity } from '@auth/entities/address.entity';
import { AdditionalInformationEntity } from '@auth/entities/additional-information.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject(AuthRepositoryEnum.USER_REPOSITORY)
    private repository: Repository<UserEntity>,
    @Inject(AuthRepositoryEnum.ADDRESS_REPOSITORY)
    private addressRepository: Repository<AddressEntity>,
    @Inject(AuthRepositoryEnum.ADDITIONAL_INFORMATION_REPOSITORY)
    private additionalInformationRepository: Repository<AdditionalInformationEntity>,
  ) {}

  async create(payload: CreateUserDto): Promise<UserEntity> {
    const newUser = this.repository.create(payload);

    const userCreated = await this.repository.save(newUser);

    return await this.repository.save(newUser);
  }

  async catalogue(): Promise<ServiceResponseHttpModel> {
    const response = await this.repository.findAndCount({ take: 1000 });

    return {
      data: response[0],
      pagination: { totalItems: response[1], limit: 10 },
    };
  }

  async findAll(params?: FilterUserDto): Promise<ServiceResponseHttpModel> {
    const relations = { roles: true };
    //Pagination & Filter by Search
    if (params && params?.limit > 0 && params?.page >= 0) {
      return await this.paginateAndFilter(params, relations);
    }
    //Other filters
    if (params?.birthdate) {
      return this.filterByBirthdate(params.birthdate);
    }

    //All
    const response = await this.repository.findAndCount({
      relations,
      order: { updatedAt: 'DESC' },
    });

    return {
      data: response[0],
      pagination: { totalItems: response[1], limit: 10 },
    };
  }

  async findOne(id: string): Promise<UserEntity> {
    const user = await this.repository.findOne({
      where: { id },
      relations: {
        roles: true,
        identificationType: true,
      },
      select: { password: false },
    });

    if (!user) {
      throw new NotFoundException('Usuario no encontrado (find one)');
    }

    return user;
  }

  async findPersonalInformation(id: string): Promise<UserEntity> {
    const user = await this.repository.findOne({
      where: { id },
      select: {
        id: true,
      },
      relations: {
        additionalInformation: true,
      },
    });

    if (!user) {
      throw new NotFoundException(
        'Usuario no encontrado (find persona information)',
      );
    }

    return user;
  }

  async findBankDetail(id: string): Promise<UserEntity> {
    const user = await this.repository.findOne({
      where: { id },
      select: {
        id: true,
      },
      relations: {
        additionalInformation: true,
      },
    });

    if (!user) {
      throw new NotFoundException(
        'Usuario no encontrado (find persona information)',
      );
    }

    return user;
  }

  async findByUsername(username: string): Promise<UserEntity> {
    const user = await this.repository.findOne({
      where: { username },
      select: { password: false },
    });

    if (!user) {
      throw new NotFoundException('Nombre de usuario no existe');
    }

    return user;
  }

  async update(id: string, payload: UpdateUserDto): Promise<UserEntity> {
    const user = await this.repository.findOne({
      relations: { roles: true },
      where: { id },
    });

    if (!user) {
      throw new NotFoundException('Usuario no encontrado para actualizar');
    }

    this.repository.merge(user, payload);

    user.roles = payload.roles;

    return await this.repository.save(user);
  }

  async reactivate(id: string): Promise<ReadUserDto> {
    const user = await this.findOne(id);

    if (!user) {
      throw new NotFoundException('Usuario no encontrado para reactivar');
    }

    user.suspendedAt = null;
    user.maxAttempts = MAX_ATTEMPTS;

    const userUpdated = await this.repository.save(user);

    return plainToInstance(ReadUserDto, userUpdated);
  }

  async remove(id: string): Promise<ReadUserDto> {
    const user = await this.repository.findOneBy({ id });

    if (!user) {
      throw new NotFoundException('Usuario no encontrado para eliminar');
    }

    const userDeleted = await this.repository.softRemove(user);

    return plainToInstance(ReadUserDto, userDeleted);
  }

  async removeAll(payload: UserEntity[]): Promise<UserEntity> {
    const usersDeleted = await this.repository.softRemove(payload);
    return usersDeleted[0];
  }

  private async paginateAndFilter(
    params: FilterUserDto,
    relations: any,
  ): Promise<ServiceResponseHttpModel> {
    let where: FindOptionsWhere<UserEntity> | FindOptionsWhere<UserEntity>[];
    where = {};
    let { page, search } = params;
    const { limit } = params;

    if (search) {
      search = search.trim();
      page = 0;
      where = [];
      where.push({ identification: ILike(`%${search}%`) });
      where.push({ lastname: ILike(`%${search}%`) });
      where.push({ name: ILike(`%${search}%`) });
      where.push({ username: ILike(`%${search}%`) });
      where.push({ roles: { name: ILike(`%${search}%`) } });
    }

    const response = await this.repository.findAndCount({
      where,
      relations,
      take: limit,
      skip: PaginationDto.getOffset(limit, page),
      order: {
        updatedAt: 'DESC',
      },
    });

    return {
      data: plainToInstance(ReadUserDto, response[0]),
      pagination: { limit, totalItems: response[1] },
    };
  }

  private async filterByBirthdate(
    birthdate: Date,
  ): Promise<ServiceResponseHttpModel> {
    const where: FindOptionsWhere<UserEntity> = {};

    if (birthdate) {
      where.birthdate = LessThan(birthdate);
    }

    const response = await this.repository.findAndCount({ where });

    return {
      data: plainToInstance(ReadUserDto, response[0]),
      pagination: { limit: 10, totalItems: response[1] },
    };
  }

  async suspend(id: string): Promise<ReadUserDto> {
    const user = await this.findOne(id);

    if (!user) {
      throw new NotFoundException('Usuario no encontrado para suspender');
    }

    user.suspendedAt = new Date();

    const userUpdated = await this.repository.save(user);

    return plainToInstance(ReadUserDto, userUpdated);
  }

  async updatePersonalInformation(
    id: string,
    payload: any,
  ): Promise<UserEntity> {
    const user = await this.repository.findOne({
      where: { id },
      relations: { additionalInformation: true },
    });

    if (!user) {
      throw new NotFoundException('Usuario no encontrado para actualizar');
    }

    let additionalInformation = user.additionalInformation;

    if (!additionalInformation) {
      additionalInformation = this.additionalInformationRepository.create();
      additionalInformation.userId = id;
    }

    user.email = payload.additionalInformation.correo;
    additionalInformation.correo = payload.additionalInformation.correo;

    await this.repository.save(user);
    await this.additionalInformationRepository.save(additionalInformation);

    return user;
  }

  async updateBankDetail(id: string, payload: any): Promise<UserEntity> {
    const user = await this.repository.findOne({
      where: { id },
      relations: { additionalInformation: true },
    });

    if (!user) {
      throw new NotFoundException('Usuario no encontrado para actualizar');
    }

    let additionalInformation = user.additionalInformation;

    if (!additionalInformation) {
      additionalInformation = this.additionalInformationRepository.create();
      additionalInformation.userId = id;
    }

    additionalInformation.cambioCuenta = true;
    additionalInformation.numeroCuenta =
      payload.additionalInformation.numeroCuenta;
    additionalInformation.nombreCorto =
      payload.additionalInformation.nombreCorto;
    additionalInformation.tipoCuenta = payload.additionalInformation.tipoCuenta;

    await this.additionalInformationRepository.save(additionalInformation);

    return user;
  }

  async updateEmail(id: string, payload: any): Promise<UserEntity> {
    const user = await this.repository.findOne({
      where: { id },
      relations: { additionalInformation: true },
    });

    if (!user) {
      throw new NotFoundException('Usuario no encontrado para actualizar');
    }

    let additionalInformation = user.additionalInformation;

    if (!additionalInformation) {
      additionalInformation = this.additionalInformationRepository.create();
      additionalInformation.userId = id;
    }

    user.email = payload.email;
    additionalInformation.correo = payload.email;

    await this.repository.save(user);
    await this.additionalInformationRepository.save(additionalInformation);

    return user;
  }
}
