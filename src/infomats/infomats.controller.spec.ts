import { Test, TestingModule } from '@nestjs/testing';
import { InfomatsController } from './infomats.controller';
import { InfomatsService } from './infomats.service';

describe('InfomatsController', () => {
  let controller: InfomatsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InfomatsController],
      providers: [InfomatsService],
    }).compile();

    controller = module.get<InfomatsController>(InfomatsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
