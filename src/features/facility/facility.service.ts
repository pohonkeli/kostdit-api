import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFacilityDto } from './dto/create-facility.dto';
import { DeleteFacilityDto } from './dto/delete-facility.dto';
import { GetFacilityDto } from './dto/get-facility.dto';
import { UpdateFacilityDto } from './dto/update-facility.dto';
import { Facility } from './entities/facility.entity';

@Injectable()
export class FacilityService {
  constructor(
    @InjectRepository(Facility)
    private facilityRepository: Repository<Facility>,
  ) {}

  async create(createFacilityDto: CreateFacilityDto): Promise<Facility> {
    const result = await this.facilityRepository.save(createFacilityDto);
    return result;
  }

  async find(getFacilityDto: GetFacilityDto): Promise<Facility[]> {
    const result = await this.facilityRepository.find({
      where: {
        isActive: true,
      },
    });
    return result;
  }

  async update(updateFacilityDto: UpdateFacilityDto): Promise<Facility> {
    updateFacilityDto.modifiedDate = new Date().toISOString();
    const result = await this.facilityRepository.save(updateFacilityDto);
    return result;
  }

  async remove(deleteFacilityDto: DeleteFacilityDto): Promise<Facility> {
    deleteFacilityDto.isActive = false;
    const result = await this.facilityRepository.save(deleteFacilityDto);
    return result;
  }
}
