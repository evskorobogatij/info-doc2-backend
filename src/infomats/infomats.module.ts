import { Module } from '@nestjs/common';
import { InfomatsService } from './infomats.service';
import { InfomatsController } from './infomats.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Infomat, InfomatSchema } from './schemas/infomat.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Infomat.name, schema: InfomatSchema }]),
  ],
  controllers: [InfomatsController],
  providers: [InfomatsService],
})
export class InfomatsModule {}
