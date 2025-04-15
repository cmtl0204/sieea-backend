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
import { ResponseHttpModel } from '@shared/interfaces';
import {
  CreateCatalogueDto,
  UpdateCatalogueDto,
} from '@modules/common/catalogue/dto';
import { Auth } from '@auth/decorators';
import { ActivityService } from '@modules/core/activity/activity.service';

@ApiTags('Activities')
@Auth()
@Controller('activities')
export class ActivityController {
  constructor(private activityService: ActivityService) {}

  @ApiOperation({ summary: 'List of activities' })
  @Get()
  @HttpCode(HttpStatus.OK)
  async findActivitiesByAdditionalInformation(
    @Query('additionalInformationId') additionalInformationId: string,
  ): Promise<ResponseHttpModel> {
    const response =
      await this.activityService.findActivitiesByAdditionalInformation(
        additionalInformationId,
      );

    return {
      data: response,
      message: `index`,
      title: `index`,
    };
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Query('additionalInformationId') additionalInformationId: string,
    @Body() payload: any,
  ): Promise<ResponseHttpModel> {
    const data = await this.activityService.create(
      additionalInformationId,
      payload,
    );

    return {
      data,
      message: 'created',
      title: 'created',
    };
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findOne(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<ResponseHttpModel> {
    const data = await this.activityService.findOne(id);
    return {
      data,
      message: `show ${id}`,
      title: `Success`,
    };
  }

  @Put(':id')
  @HttpCode(HttpStatus.CREATED)
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() payload: UpdateCatalogueDto,
  ): Promise<ResponseHttpModel> {
    const data = await this.activityService.update(id, payload);

    return {
      data: data,
      message: `Catalogue updated ${id}`,
      title: `Updated`,
    };
  }

  @Delete(':id')
  @HttpCode(HttpStatus.CREATED)
  async remove(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<ResponseHttpModel> {
    const data = await this.activityService.remove(id);

    return {
      data,
      message: `Catalogue deleted ${id}`,
      title: `Deleted`,
    };
  }
}
