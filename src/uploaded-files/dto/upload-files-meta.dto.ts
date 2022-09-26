import { ApiProperty } from '@nestjs/swagger';

export class UploadFileMetaDto {
  @ApiProperty({
    description: 'Имя загруженого файла',
    type: String,
    example: 'ksdufydd.pdf',
  })
  filename: string;

  @ApiProperty({
    description: 'Оригинальное имя файла',
    type: String,
    example: 'Документ.pdf',
  })
  original: string;

  @ApiProperty({
    description: 'Размер файла в байтах',
    type: Number,
    example: 78943,
  })
  size: number;

  @ApiProperty({
    description: 'Тип файла',
    type: String,
    example: 'application/pdf',
  })
  mime: string;

  @ApiProperty({
    description: 'Расширение файла',
    type: String,
    example: 'pdf',
  })
  ext: string;
}

export class UploadFileMetaDtoWithId {
  @ApiProperty({
    description: 'Идентификатор загруженого файла',
    type: String,
    example: 'pdf',
  })
  id: string;

  @ApiProperty({
    description: 'Имя загруженого файла',
    type: String,
    example: 'ksdufydd.pdf',
  })
  filename: string;

  @ApiProperty({
    description: 'Оригинальное имя файла',
    type: String,
    example: 'Документ.pdf',
  })
  original: string;

  @ApiProperty({
    description: 'Размер файла в байтах',
    type: Number,
    example: 78943,
  })
  size: number;

  @ApiProperty({
    description: 'Тип файла',
    type: String,
    example: 'application/pdf',
  })
  mime: string;

  @ApiProperty({
    description: 'Расширение файла',
    type: String,
    example: 'pdf',
  })
  ext: string;
}
