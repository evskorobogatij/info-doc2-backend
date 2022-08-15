import { ApiProperty } from '@nestjs/swagger';

export class CreateInfomatDto {
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
}
