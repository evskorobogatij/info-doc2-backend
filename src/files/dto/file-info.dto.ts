import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsDate } from 'class-validator';

export class FileInfoDto {
  @ApiProperty({
    description: 'ID файла',
    type: String,
    example: 'g975hdiy73424....',
  })
  id: string;

  @ApiProperty({
    description: 'Заголовок файла',
    type: String,
    example: 'Документ...',
  })
  title: string;

  @ApiProperty({
    description: 'Идентификатор загруженого файла',
    example: 'dfhg964935....',
  })
  file: string;

  @ApiProperty({
    description: 'Дата создания инфомата по UTC',
    example: '2022-07-06T20:51:21.415+00:00',
    type: Date,
  })
  @Transform(({ value }) => new Date(value))
  @IsDate()
  createtAt: Date;

  @ApiProperty({
    description: 'Дата редактирования сведений о инфомате по UTC',
    example: '2022-07-06T20:51:21.415+00:00',
    type: Date,
  })
  @Transform(({ value }) => new Date(value))
  @IsDate()
  updatedAt: Date;
}

export type FilesInfoDto = Array<FileInfoDto>;
