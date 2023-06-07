import { ApiProperty } from '@nestjs/swagger';
import { BaseCreateDto } from '../../../core/base-dto/base-create.dto';

export class CreateAssetGroupDto extends BaseCreateDto {
  @ApiProperty()
  assetGroupName: string;

  @ApiProperty()
  assetGroupLocation: string;

  @ApiProperty()
  assetGroupNotes: string;
}
