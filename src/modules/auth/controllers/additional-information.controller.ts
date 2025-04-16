import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PublicRoute } from '@auth/decorators';
import { AdditionalInformationService } from '@auth/services/additional-information.service';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('AdditionalInformation')
@Controller('additional-information')
export class AdditionalInformationController {
  constructor(
    private additionalInformationService: AdditionalInformationService,
  ) {}

  @PublicRoute()
  @Post('leer')
  @UseInterceptors(FileInterceptor('file'))
  async leerExcel(@UploadedFile() file: Express.Multer.File) {
    return this.additionalInformationService.readExcel(file);
  }
}
