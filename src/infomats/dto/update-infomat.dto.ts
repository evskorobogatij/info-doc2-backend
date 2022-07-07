import { PartialType } from '@nestjs/mapped-types';
import { CreateInfomatDto } from './create-infomat.dto';

export class UpdateInfomatDto extends PartialType(CreateInfomatDto) {}
