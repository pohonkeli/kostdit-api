import { ApiProperty } from '@nestjs/swagger';
import { BaseCreateDto } from '../../../core/base-dto/base-create.dto';

export class CreateFacilityDto extends BaseCreateDto {
  @ApiProperty()
  fasilitasName: string;

  @ApiProperty()
  fasilitasPrice: number;

  @ApiProperty()
  fasilitasNotes: string;
}
