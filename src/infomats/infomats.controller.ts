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
import { InfomatsService } from './infomats.service';
import { CreateInfomatDto } from './dto/create-infomat.dto';
import { UpdateInfomatDto } from './dto/update-infomat.dto';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { InfoInfomatDto } from './dto/info-infomat.dto';

@ApiTags('infomats')
@Controller('infomats')
export class InfomatsController {
  constructor(private readonly infomatsService: InfomatsService) {}

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({
    description: 'Возвращает вновь созданный инфомат',
    type: InfoInfomatDto,
  })
  @Post()
  create(@Body() createInfomatDto: CreateInfomatDto) {
    return this.infomatsService.create(createInfomatDto);
  }

  @Get()
  @ApiOkResponse({
    description: 'Возвращает список инфоматов',
    type: [InfoInfomatDto],
  })
  findAll() {
    return this.infomatsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({
    description: 'Возвращает сведения об указаном инфомате',
    type: InfoInfomatDto,
  })
  findOne(@Param('id') id: string) {
    return this.infomatsService.findOne(id);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  @ApiOkResponse({
    description: 'Обновляет данные об инфомате',
    type: InfoInfomatDto,
  })
  update(@Param('id') id: string, @Body() updateInfomatDto: UpdateInfomatDto) {
    return this.infomatsService.update(id, updateInfomatDto);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  @ApiOkResponse({
    description: 'Идаляет инфомат из системы',
    type: InfoInfomatDto,
  })
  remove(@Param('id') id: string) {
    return this.infomatsService.remove(id);
  }
}
