import { IsOptional, IsString } from 'class-validator';
import { PaginationDto } from '@shared/dto';

export class FilterActivityDto extends PaginationDto {
  @IsOptional()
  @IsString()
  readonly code: string;

  @IsOptional()
  @IsString()
  readonly name: string;
}
