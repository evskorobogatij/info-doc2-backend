import { ApiProperty } from '@nestjs/swagger';

export class InfoInfomatDto {
  @ApiProperty({
    description: 'id инфомата',
    example: '62c5f5c92c0f5d5e572545da',
    type: String,
  })
  id: string;

  @ApiProperty({
    uniqueItems: true,
    description: 'Код инфомата',
    example: 334,
    type: Number,
  })
  code: number;

  @ApiProperty({
    description: 'Название инфомата',
    example: 'Взрослая поликлиника',
    type: String,
  })
  name: string;

  @ApiProperty({
    description: 'Дата создания инфомата по UTC',
    example: '2022-07-06T20:51:21.415+00:00',
    type: Date,
  })
  createtAt: Date;

  @ApiProperty({
    description: 'Дата редактирования сведений о инфомате по UTC',
    example: '2022-07-06T20:51:21.415+00:00',
    type: Date,
  })
  updatedAt: Date;
}
