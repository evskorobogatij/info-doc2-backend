import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UploadFileMetaDto } from './dto/upload-files-meta.dto';
import {
  UploadedFileDoc,
  UploadedFileDocDocument,
} from './schema/uploaded-file.schema';

@Injectable()
export class UploadedFilesService {
  constructor(
    @InjectModel(UploadedFileDoc.name)
    private readonly uploadedFileModel: Model<UploadedFileDocDocument>,
  ) {}

  create(uploadFileMetaDto: UploadFileMetaDto) {
    const uploadedFile = new this.uploadedFileModel(uploadFileMetaDto);
    uploadedFile.filename = uploadFileMetaDto.filename;
    return uploadedFile.save();
  }

  delete(id: string) {
    return this.uploadedFileModel.findByIdAndDelete(id);
  }

  findById(id: string) {
    return this.uploadedFileModel.findById(id);
  }
}
