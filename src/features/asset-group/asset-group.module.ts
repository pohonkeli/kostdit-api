import { Module } from '@nestjs/common';
import { AssetGroupService } from './asset-group.service';
import { AssetGroupController } from './asset-group.controller';
import { AssetGroup } from './entities/asset-group.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([AssetGroup])],
  controllers: [AssetGroupController],
  providers: [AssetGroupService],
})
export class AssetGroupModule {}
