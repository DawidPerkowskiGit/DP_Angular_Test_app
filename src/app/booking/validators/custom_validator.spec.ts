import { CustomValidator } from './custom_validator';

describe('CustomValidator', () => {
  it('should create an instance', () => {
    const directive = new CustomValidator();
    expect(directive).toBeTruthy();
  });
});
