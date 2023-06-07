import { ApiProperty } from '@nestjs/swagger';
import { BaseUpdateDto } from '../../../core/base-dto/base-update.dto';

export class UpdateFacilityDto extends BaseUpdateDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  fasilitasName: string;

  @ApiProperty()
  fasilitasPrice: number;

  @ApiProperty()
  isActive: boolean;
}
