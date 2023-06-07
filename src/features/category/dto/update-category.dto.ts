import { ApiProperty } from '@nestjs/swagger';
import { BaseUpdateDto } from '../../../core/base-dto/base-update.dto';

export class UpdateCategoryDto extends BaseUpdateDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  kategori_name: string;

  @ApiProperty()
  kategori_notes: string;

  @ApiProperty()
  is_active: boolean;
}
