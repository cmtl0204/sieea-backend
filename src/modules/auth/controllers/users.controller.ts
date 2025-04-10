import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUserDto, FilterUserDto, UpdateUserDto } from '@auth/dto';
import { UserEntity } from '@auth/entities';
import { ResponseHttpModel } from '@shared/interfaces';
import { Auth, PublicRoute } from '@auth/decorators';
import { RoleEnum } from '@auth/enums';
import { UsersService } from '../services/users.service';

@Auth()
@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiOperation({ summary: 'Create One' })
  @PublicRoute()
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() payload: CreateUserDto): Promise<ResponseHttpModel> {
    const serviceResponse = await this.usersService.create(payload);

    return {
      data: serviceResponse,
      message: 'User created',
      title: 'Created',
    };
  }

  @ApiOperation({ summary: 'Catalogue' })
  @Get('catalogue')
  @HttpCode(HttpStatus.OK)
  async catalogue(): Promise<ResponseHttpModel> {
    const serviceResponse = await this.usersService.catalogue();

    return {
      data: serviceResponse.data,
      pagination: serviceResponse.pagination,
      message: `catalogue`,
      title: `Catalogue`,
    };
  }

  @ApiOperation({ summary: 'Find All' })
  // @Auth(RoleEnum.ADMIN)
  @PublicRoute()
  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(@Query() params: FilterUserDto): Promise<ResponseHttpModel> {
    const serviceResponse = await this.usersService.findAll(params);

    return {
      data: serviceResponse.data,
      pagination: serviceResponse.pagination,
      message: `index`,
      title: 'Success',
    };
  }

  @ApiOperation({ summary: 'Find One' })
  @Auth()
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findOne(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<ResponseHttpModel> {
    const serviceResponse = await this.usersService.findOne(id);

    return {
      data: serviceResponse,
      message: `show ${id}`,
      title: `Success`,
    };
  }

  @ApiOperation({ summary: 'Update One' })
  @Auth()
  @Put(':id')
  @HttpCode(HttpStatus.CREATED)
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() payload: UpdateUserDto,
  ): Promise<ResponseHttpModel> {
    const serviceResponse = await this.usersService.update(id, payload);

    return {
      data: serviceResponse,
      message: `Usuario actualizado`,
      title: `Actualizado`,
    };
  }

  @ApiOperation({ summary: 'Reactivate' })
  @Auth()
  @Put(':id/reactivate')
  @HttpCode(HttpStatus.CREATED)
  async reactivate(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<ResponseHttpModel> {
    const serviceResponse = await this.usersService.reactivate(id);

    return {
      data: serviceResponse,
      message: `Usuario reactivado`,
      title: `Reactivado`,
    };
  }

  @ApiOperation({ summary: 'Remove One' })
  @Auth()
  @Delete(':id')
  @HttpCode(HttpStatus.CREATED)
  async remove(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<ResponseHttpModel> {
    const serviceResponse = await this.usersService.remove(id);

    return {
      data: serviceResponse,
      message: `Usuario eliminado`,
      title: `Eliminado`,
    };
  }

  @ApiOperation({ summary: 'Remove All' })
  @Auth()
  @Patch('remove-all')
  @HttpCode(HttpStatus.CREATED)
  async removeAll(@Body() payload: UserEntity[]): Promise<ResponseHttpModel> {
    const serviceResponse = await this.usersService.removeAll(payload);

    return {
      data: serviceResponse,
      message: `Users deleted`,
      title: `Deleted`,
    };
  }

  @ApiOperation({ summary: 'Suspend One' })
  @Auth()
  @Put(':id/suspend')
  @HttpCode(HttpStatus.CREATED)
  async suspend(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<ResponseHttpModel> {
    const serviceResponse = await this.usersService.suspend(id);

    return {
      data: serviceResponse,
      message: `Usuario suspendido`,
      title: `Suspendido`,
    };
  }

  @ApiOperation({ summary: 'Find Personal Information' })
  @Auth()
  @Get(':id/personal-information')
  @HttpCode(HttpStatus.OK)
  async findPersonalInformation(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<ResponseHttpModel> {
    const serviceResponse = await this.usersService.findPersonalInformation(id);

    return {
      data: serviceResponse,
      message: `show ${id}`,
      title: `Success`,
    };
  }

  @ApiOperation({ summary: 'Find Bank Detail' })
  @Auth()
  @Get(':id/bank-detail')
  @HttpCode(HttpStatus.OK)
  async findBankDetail(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<ResponseHttpModel> {
    const serviceResponse = await this.usersService.findBankDetail(id);

    return {
      data: serviceResponse,
      message: `show ${id}`,
      title: `Success`,
    };
  }

  @ApiOperation({ summary: 'Update Personal Information' })
  @Auth()
  @Put(':id/personal-information')
  @HttpCode(HttpStatus.CREATED)
  async updatePersonalInformation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() payload: any,
  ): Promise<ResponseHttpModel> {
    const serviceResponse = await this.usersService.updatePersonalInformation(
      id,
      payload,
    );

    return {
      data: serviceResponse,
      message: `Información Actualizada Correctamente`,
      title: `Actualizado`,
    };
  }

  @ApiOperation({ summary: 'Update Bank Detail' })
  @Auth()
  @Put(':id/bank-detail')
  @HttpCode(HttpStatus.CREATED)
  async updateBankDetail(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() payload: any,
  ): Promise<ResponseHttpModel> {
    const serviceResponse = await this.usersService.updateBankDetail(
      id,
      payload,
    );

    return {
      data: serviceResponse,
      message: `Información Actualizada Correctamente`,
      title: `Actualizado`,
    };
  }

  @ApiOperation({ summary: 'Update Bank Detail' })
  @Auth()
  @Patch(':id/email')
  @HttpCode(HttpStatus.CREATED)
  async updateEmail(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() payload: any,
  ): Promise<ResponseHttpModel> {
    const serviceResponse = await this.usersService.updateEmail(
      id,
      payload,
    );

    return {
      data: serviceResponse,
      message: `Información Actualizada Correctamente`,
      title: `Actualizado`,
    };
  }
}
