import { Test, TestingModule } from '@nestjs/testing';
import { AnayticsService } from './anaytics.service';

describe('AnayticsService', () => {
  let service: AnayticsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnayticsService],
    }).compile();

    service = module.get<AnayticsService>(AnayticsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
