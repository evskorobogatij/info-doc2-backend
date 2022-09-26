import { Test, TestingModule } from '@nestjs/testing';
import { UploadedFilesService } from './uploaded-files.service';

describe('UploadedFilesService', () => {
  let service: UploadedFilesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UploadedFilesService],
    }).compile();

    service = module.get<UploadedFilesService>(UploadedFilesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
