import { ApiProperty } from '@nestjs/swagger';
import { BaseUpdateDto } from '../../../core/base-dto/base-update.dto';

export class UpdateAssetGroupDto extends BaseUpdateDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  assetGroupName: string;

  @ApiProperty()
  assetGroupLocation: string;

  @ApiProperty()
  assetGroupNotes: string;

  @ApiProperty()
  isActive: boolean;
}
