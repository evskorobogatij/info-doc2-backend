import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateInfomatDto } from './create-infomat.dto';

export class UpdateInfomatDto extends PartialType(CreateInfomatDto) {
  @ApiProperty({
    uniqueItems: true,
    description: 'Код инфомата',
    example: 334,
    type: Number,
    required: false,
  })
  code?: number;

  @ApiProperty({
    description: 'Название инфомата',
    example: 'Взрослая поликлиника',
    type: String,
    required: false,
  })
  name?: string;
}
