import { Test, TestingModule } from '@nestjs/testing';
import { AssetGroupService } from './asset-group.service';

describe('AssetGroupService', () => {
  let service: AssetGroupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AssetGroupService],
    }).compile();

    service = module.get<AssetGroupService>(AssetGroupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
