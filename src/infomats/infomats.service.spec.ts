import { Test, TestingModule } from '@nestjs/testing';
import { InfomatsService } from './infomats.service';

describe('InfomatsService', () => {
  let service: InfomatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InfomatsService],
    }).compile();

    service = module.get<InfomatsService>(InfomatsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
