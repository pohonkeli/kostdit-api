import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAssetGroupDto } from './dto/create-asset-group.dto';
import { DeleteAssetGroupDto } from './dto/delete-asset-group.dto';
import { GetAssetGroupDto } from './dto/get-asset-group.dto';
import { UpdateAssetGroupDto } from './dto/update-asset-group.dto';
import { AssetGroup } from './entities/asset-group.entity';

@Injectable()
export class AssetGroupService {
  constructor(
    @InjectRepository(AssetGroup)
    private assetGroupRepository: Repository<AssetGroup>,
  ) {}

  async create(createAssetGroupDto: CreateAssetGroupDto): Promise<AssetGroup> {
    const result = await this.assetGroupRepository.save(createAssetGroupDto);
    return result;
  }

  async find(getFacilityDto: GetAssetGroupDto): Promise<AssetGroup[]> {
    const result = await this.assetGroupRepository.find({
      where: {
        isActive: true,
      },
    });
    return result;
  }

  async update(updateAssetGroupDto: UpdateAssetGroupDto): Promise<AssetGroup> {
    updateAssetGroupDto.modifiedDate = new Date().toISOString();
    const result = await this.assetGroupRepository.save(updateAssetGroupDto);
    return result;
  }

  async remove(deleteAssetGroupDto: DeleteAssetGroupDto): Promise<AssetGroup> {
    deleteAssetGroupDto.isActive = false;
    const result = await this.assetGroupRepository.save(deleteAssetGroupDto);
    return result;
  }
}
