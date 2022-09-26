import { ApiProperty } from '@nestjs/swagger';

export class BadUploadFileDto {
  @ApiProperty({ description: 'Код ошибки', type: Number, example: 400 })
  statusCode: number;

  @ApiProperty({
    description: 'Сообщения об ошибке',
    type: String,
    example: 'Неправильный тип файла',
  })
  message: string;
}
