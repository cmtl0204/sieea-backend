import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ResponseHttpModel } from '@shared/interfaces';
import { Auth, PublicRoute } from '@auth/decorators';
import { StateService } from '@modules/core/state/state.service';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('States')
@Auth()
@Controller('states')
export class StateController {
  constructor(private service: StateService) {}

  @ApiOperation({ summary: 'List of activities' })
  @Get()
  @HttpCode(HttpStatus.OK)
  async findActivitiesByIdentification(
    @Query('identification') identification: string,
  ): Promise<ResponseHttpModel> {
    const response =
      await this.service.findStatesByIdentification(identification);

    return {
      data: response,
      message: `index`,
      title: `index`,
    };
  }

  @Post('commentaries')
  @HttpCode(HttpStatus.CREATED)
  async createCommentary(
    @Query('identification') identification: string,
    @Body() payload: any,
  ): Promise<ResponseHttpModel> {
    const data = await this.service.createCommentary(identification, payload);

    return {
      data,
      message: 'created',
      title: 'created',
    };
  }

  @Post('reviews')
  @HttpCode(HttpStatus.CREATED)
  async review(
    @Query('identification') identification: string,
  ): Promise<ResponseHttpModel> {
    const data = await this.service.createReview(identification);

    return {
      data,
      message: 'Teléfonos consultados',
      title: 'Consulta',
    };
  }

  @PublicRoute()
  @Post('leer')
  @UseInterceptors(FileInterceptor('file'))
  async leerExcel(@UploadedFile() file: Express.Multer.File) {
    return this.service.readExcel(file);
  }
}
