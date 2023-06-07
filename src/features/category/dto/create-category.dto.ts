import { ApiProperty } from '@nestjs/swagger';
import { BaseCreateDto } from '../../../core/base-dto/base-create.dto';

export class CreateCategoryDto extends BaseCreateDto {
  @ApiProperty()
  kategori_name: string;
}
