import { BaseCreateDto } from './base-create.dto';

describe('BaseCreateDto', () => {
  it('should be defined', () => {
    expect(new BaseCreateDto()).toBeDefined();
  });
});
