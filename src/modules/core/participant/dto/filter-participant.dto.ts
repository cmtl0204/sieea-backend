import { IsOptional, IsString } from 'class-validator';
import { PaginationDto } from '@shared/dto';

export class FilterParticipantDto extends PaginationDto {
  @IsOptional()
  @IsString()
  readonly code: string;

  @IsOptional()
  @IsString()
  readonly name: string;
}
