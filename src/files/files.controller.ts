import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { FilesService } from './files.service';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { FileInfoDto, FilesInfoDto } from './dto/file-info.dto';

@ApiTags('files')
@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}
  //  { dest: './upload' }
  // @Post('upload')
  // @UseInterceptors(FileInterceptor('file', multerOptions))
  // @ApiConsumes('multipart/form-data')
  // @ApiBody({
  //   description: 'Файл документа',
  //   type: FileUploadDto,
  // })
  // uploadFile(@UploadedFile() file: Express.Multer.File) {
  //   return {
  //     filename: file.filename,
  //     size: file.size,
  //     mime: file.mimetype,
  //     ext: file.originalname.split('.').at(-1),
  //   };
  // }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiOperation({ description: 'Внесение сведений о файле' })
  @ApiOkResponse({
    type: FileInfoDto,
    description: 'Сведения о файле',
  })
  create(@Body() createFileDto: CreateFileDto) {
    return this.filesService.create(createFileDto);
  }

  @Get()
  @ApiOperation({
    description: 'Получение списка загруженых файлов с метаданными',
  })
  @ApiOkResponse({
    type: [FileInfoDto],
    description: 'Список файлов',
  })
  findAll() {
    return this.filesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ description: 'Получение сведений о файле' })
  @ApiOkResponse({
    type: FileInfoDto,
    description: 'Сведения о файле',
  })
  findOne(@Param('id') id: string) {
    return this.filesService.findOne(id);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  @ApiOperation({ description: 'Редактирования сведений о файле' })
  @ApiOkResponse({
    type: FileInfoDto,
    description: 'Сведения о файле',
  })
  update(@Param('id') id: string, @Body() updateFileDto: UpdateFileDto) {
    return this.filesService.update(id, updateFileDto);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  @ApiOkResponse({
    type: FileInfoDto,
    description: 'Сведения о файле',
  })
  @ApiOperation({ description: 'Удаление сведений о файле' })
  remove(@Param('id') id: string) {
    return this.filesService.remove(id);
  }
}
