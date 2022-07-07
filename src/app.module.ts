import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { InfomatsModule } from './infomats/infomats.module';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(`mongodb://ferrum.msch125.ru:27017/infomat`, {
      autoCreate: true,
    }),
    InfomatsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
