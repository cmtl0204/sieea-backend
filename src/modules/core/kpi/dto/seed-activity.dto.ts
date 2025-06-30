import { ActivityDto } from './activity.dto';
import { IsBoolean } from 'class-validator';
import { isBooleanValidationOptions } from '@shared/dto-validation';

export class SeedActivityDto extends ActivityDto {
  @IsBoolean(isBooleanValidationOptions())
  readonly required: boolean;
}
