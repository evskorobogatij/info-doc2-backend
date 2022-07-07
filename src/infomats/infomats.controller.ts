import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { InfomatsService } from './infomats.service';
import { CreateInfomatDto } from './dto/create-infomat.dto';
import { UpdateInfomatDto } from './dto/update-infomat.dto';

@Controller('infomats')
export class InfomatsController {
  constructor(private readonly infomatsService: InfomatsService) {}

  @Post()
  create(@Body() createInfomatDto: CreateInfomatDto) {
    return this.infomatsService.create(createInfomatDto);
  }

  @Get()
  findAll() {
    return this.infomatsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.infomatsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInfomatDto: UpdateInfomatDto) {
    return this.infomatsService.update(id, updateInfomatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.infomatsService.remove(id);
  }
}
