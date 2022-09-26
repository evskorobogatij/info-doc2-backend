import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Response,
  StreamableFile,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { multerOptions } from 'src/config/multerConfig';
import { FileUploadDto } from './dto/file-upload.dto';
import { UploadedFilesService } from './uploaded-files.service';
import * as path from 'path';
import { createReadStream } from 'fs';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import {
  UploadFileMetaDto,
  UploadFileMetaDtoWithId,
} from './dto/upload-files-meta.dto';
import { BadUploadFileDto } from './dto/bad-upload-flie.dto';

@ApiTags('files')
@Controller()
export class UploadedFilesController {
  constructor(private readonly uploadedFilesService: UploadedFilesService) {}

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post('/upload')
  @UseInterceptors(FileInterceptor('file', multerOptions))
  @ApiConsumes('multipart/form-data')
  @ApiOperation({ description: 'Загрузка файла на сервер' })
  @ApiBody({
    description: 'Файл документа',
    type: FileUploadDto,
  })
  @ApiOkResponse({
    description: 'Метаданные загруженого файла',
    type: UploadFileMetaDtoWithId,
  })
  @ApiBadRequestResponse({
    description: 'Ошибка при загрузке файла',
    type: BadUploadFileDto,
  })
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    const oname = Buffer.from(file.originalname, 'latin1').toString('utf8');
    // console.log({
    //   filename: file.filename,
    //   size: file.size,
    //   mime: file.mimetype,
    //   ext: file.originalname.split('.').at(-1),
    //   original: path.parse(file.originalname).base,
    // });
    return this.uploadedFilesService.create({
      filename: file.filename,
      size: file.size,
      mime: file.mimetype,
      ext: file.originalname.split('.').at(-1),
      original: path.parse(oname).base,
    });
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete('/uploaded/:id')
  @ApiOperation({ description: 'Удаление загруженого файла' })
  @ApiOkResponse({
    description: 'Получение метаданных удаленного файла',
    type: UploadFileMetaDto,
  })
  removeUploaded(@Param('id') id: string) {
    return this.uploadedFilesService.delete(id);
  }

  @Get('/upload/:id')
  @ApiOperation({ description: 'Получение метаданных загруженого файла' })
  @ApiOkResponse({
    description: 'Метаданные загруженого файла',
    type: UploadFileMetaDtoWithId,
  })
  uploadedMetadata(@Param('id') id: string) {
    return this.uploadedFilesService.findById(id);
  }

  @Get('/documents/:filename')
  @ApiOperation({ description: 'Возвращает файл с сервера' })
  download(
    @Param('filename') filename: string,
    @Response({ passthrough: true }) res,
  ) {
    console.log(filename);
    console.log(__dirname);
    console.log(path.join(process.cwd(), filename));
    const file = createReadStream(path.join(process.cwd(), 'upload', filename));
    return new StreamableFile(file); //
  }
}
