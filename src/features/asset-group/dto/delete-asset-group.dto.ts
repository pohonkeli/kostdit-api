import { ApiProperty } from '@nestjs/swagger';

export class DeleteAssetGroupDto {
  @ApiProperty()
  id: number;

  isActive: boolean;
}
