import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  Query, UploadedFile, UseInterceptors,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ResponseHttpModel } from '@shared/interfaces';
import { UpdateCatalogueDto } from '@modules/common/catalogue/dto';
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
  async findActivitiesByAdditionalInformation(
    @Query('additionalInformationId') additionalInformationId: string,
  ): Promise<ResponseHttpModel> {
    const response = await this.service.findStatesByAdditionalInformation(
      additionalInformationId,
    );

    return {
      data: response,
      message: `index`,
      title: `index`,
    };
  }

  @PublicRoute()
  @Post('leer')
  @UseInterceptors(FileInterceptor('file'))
  async leerExcel(@UploadedFile() file: Express.Multer.File) {
    return this.service.readExcel(file);
  }
}
