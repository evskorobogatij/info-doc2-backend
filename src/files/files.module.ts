import { Module } from '@nestjs/common';
import { FilesService } from './files.service';
import { FilesController } from './files.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { File, FileSchema } from './schemas/file.schema';
import { UploadedFilesModule } from 'src/uploaded-files/uploaded-files.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: File.name, schema: FileSchema }]),
    UploadedFilesModule,
  ],
  controllers: [FilesController],
  providers: [FilesService],
})
export class FilesModule {}
