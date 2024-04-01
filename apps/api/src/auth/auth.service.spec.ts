import { Test, TestingModule } from '@nestjs/testing';
import { JWTAuthService } from './auth.service';

describe('AuthService', () => {
  let service: JWTAuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JWTAuthService],
    }).compile();

    service = module.get<JWTAuthService>(JWTAuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
