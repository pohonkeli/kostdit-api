import { ApiProperty } from '@nestjs/swagger';

export class GetCategoryDto {
  @ApiProperty()
  id: number;
}
