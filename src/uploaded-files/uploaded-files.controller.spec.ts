import { Test, TestingModule } from '@nestjs/testing';
import { UploadedFilesController } from './uploaded-files.controller';
import { UploadedFilesService } from './uploaded-files.service';

describe('UploadedFilesController', () => {
  let controller: UploadedFilesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UploadedFilesController],
      providers: [UploadedFilesService],
    }).compile();

    controller = module.get<UploadedFilesController>(UploadedFilesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
