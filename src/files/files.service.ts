import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UploadedFilesService } from 'src/uploaded-files/uploaded-files.service';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import { File, FileDocument } from './schemas/file.schema';

@Injectable()
export class FilesService {
  constructor(
    @InjectModel(File.name) private readonly fileModel: Model<FileDocument>,
    private readonly uploadedFilesService: UploadedFilesService,
  ) {}
  async create(createFileDto: CreateFileDto) {
    const createFile = new this.fileModel();
    createFile.title = createFileDto.title;
    const uploadedFile = await this.uploadedFilesService.findById(
      createFileDto.uploadedFileId,
    );
    createFile.file = uploadedFile;
    return createFile.save();
  }

  findAll() {
    return this.fileModel.find().exec();
  }

  findOne(id: string) {
    return this.fileModel.findById(id).exec();
  }

  async update(id: string, updateFileDto: UpdateFileDto) {
    console.log(`update_data for ${id}`, updateFileDto);
    const { title, uploadedFileId } = updateFileDto;
    // const uploadedDoc = await this.uploadedFilesService.findById(
    //   uploadedFileId,
    // );
    return this.fileModel.findByIdAndUpdate(id, {
      $set: { title, file: uploadedFileId },
    });
  }

  remove(id: string) {
    return this.fileModel.findByIdAndDelete(id);
    //return `This action removes a #${id} file`;
  }
}
