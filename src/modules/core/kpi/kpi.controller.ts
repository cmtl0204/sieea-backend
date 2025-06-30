import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ResponseHttpModel } from '@shared/interfaces';
import { Auth, User } from '@auth/decorators';
import { KpiService } from '@modules/core/kpi/kpi.service';
import { UserEntity } from '@auth/entities';

@ApiTags('KPI')
@Auth()
@Controller('kpi')
export class KpiController {
  constructor(private service: KpiService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async review(
    @User() user: UserEntity,
    @Body() payload: any,
  ): Promise<ResponseHttpModel> {
    const data = await this.service.create(user, payload);

    return {
      data,
      message: 'created',
      title: 'created',
    };
  }
}
