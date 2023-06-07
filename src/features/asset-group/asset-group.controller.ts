import {
  Controller,
  Post,
  Body,
  HttpCode,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AssetGroupService } from './asset-group.service';
import { CreateAssetGroupDto } from './dto/create-asset-group.dto';
import { DeleteAssetGroupDto } from './dto/delete-asset-group.dto';
import { GetAssetGroupDto } from './dto/get-asset-group.dto';
import { UpdateAssetGroupDto } from './dto/update-asset-group.dto';
import { AssetGroup } from './entities/asset-group.entity';

@ApiTags('asset-group')
@Controller('asset-group')
export class AssetGroupController {
  constructor(private readonly assetGroupService: AssetGroupService) { }

  @Post('create')
  @HttpCode(200)
  async create(
    @Body() createAssetGroupDto: CreateAssetGroupDto,
  ): Promise<AssetGroup> {
    const result = this.assetGroupService.create(createAssetGroupDto);
    return result;
  }

  @Post('/getAll')
  @HttpCode(200)
  async find(
    @Body() getAssetGroupDto: GetAssetGroupDto,
  ): Promise<AssetGroup[]> {
    const result = await this.assetGroupService.find(getAssetGroupDto);
    return result;
  }

  @Post('/update')
  @HttpCode(200)
  async update(
    @Body() updateAssetGroupDto: UpdateAssetGroupDto,
  ): Promise<AssetGroup> {
    const result = await this.assetGroupService.update(updateAssetGroupDto);
    return result;
  }

  @Post('/delete')
  @HttpCode(200)
  async remove(
    @Body() deleteAssetGroupDto: DeleteAssetGroupDto,
  ): Promise<AssetGroup> {
    const result = await this.assetGroupService.remove(deleteAssetGroupDto);
    return result;
  }
}
