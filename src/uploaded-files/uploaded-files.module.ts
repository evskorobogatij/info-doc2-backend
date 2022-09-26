import { Module } from '@nestjs/common';
import { UploadedFilesService } from './uploaded-files.service';
import { UploadedFilesController } from './uploaded-files.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  UploadedFileDoc,
  UploadedFileSchema,
} from './schema/uploaded-file.schema';

@Module({
  imports: [
    // MongooseModule.forFeature([
    //   { name: UploadedFileDoc.name, schema: UploadedFileSchema },
    // ]),
    MongooseModule.forFeatureAsync([
      {
        name: UploadedFileDoc.name,
        useFactory: () => {
          const schema = UploadedFileSchema;
          return schema;
        },
      },
    ]),
  ],
  controllers: [UploadedFilesController],
  providers: [UploadedFilesService],
  exports: [UploadedFilesService],
})
export class UploadedFilesModule {}
