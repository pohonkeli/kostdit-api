import {
  Controller,
  Post,
  Body,
  HttpCode,
} from '@nestjs/common';
import { FacilityService } from './facility.service';
import { CreateFacilityDto } from './dto/create-facility.dto';
import { UpdateFacilityDto } from './dto/update-facility.dto';
import { ApiTags } from '@nestjs/swagger';
import { Facility } from './entities/facility.entity';
import { DeleteFacilityDto } from './dto/delete-facility.dto';
import { GetFacilityDto } from './dto/get-facility.dto';

@ApiTags('facility')
@Controller('facility')
export class FacilityController {
  constructor(private readonly facilityService: FacilityService) {}

  @Post('create')
  @HttpCode(200)
  async create(
    @Body() createFacilityDto: CreateFacilityDto,
  ): Promise<Facility> {
    const result = this.facilityService.create(createFacilityDto);
    return result;
  }

  @Post('/getAll')
  @HttpCode(200)
  async find(@Body() getFacilityDto: GetFacilityDto): Promise<Facility[]> {
    const result = await this.facilityService.find(getFacilityDto);
    return result;
  }

  @Post('/update')
  @HttpCode(200)
  async update(
    @Body() updateFacilityDto: UpdateFacilityDto,
  ): Promise<Facility> {
    const result = await this.facilityService.update(updateFacilityDto);
    return result;
  }

  @Post('/delete')
  @HttpCode(200)
  async remove(
    @Body() deleteFacilityDto: DeleteFacilityDto,
  ): Promise<Facility> {
    const result = await this.facilityService.remove(deleteFacilityDto);
    return result;
  }
}
