import { ApiProperty } from '@nestjs/swagger';

export class DeleteFacilityDto {
  @ApiProperty()
  id: number;

  isActive: boolean;
}
