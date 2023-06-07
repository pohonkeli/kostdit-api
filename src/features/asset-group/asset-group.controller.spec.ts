import { Test, TestingModule } from '@nestjs/testing';
import { AssetGroupController } from './asset-group.controller';
import { AssetGroupService } from './asset-group.service';

describe('AssetGroupController', () => {
  let controller: AssetGroupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AssetGroupController],
      providers: [AssetGroupService],
    }).compile();

    controller = module.get<AssetGroupController>(AssetGroupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
