import { ApiProperty } from '@nestjs/swagger';

export class DeleteCategoryDto {
  @ApiProperty()
  id: number;

  is_active: boolean;
}
