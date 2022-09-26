import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { InfomatsModule } from './infomats/infomats.module';
import { FilesModule } from './files/files.module';
import { UploadedFilesModule } from './uploaded-files/uploaded-files.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(`mongodb://ferrum.msch125.ru:27017/infomat`, {
      autoCreate: true,
    }),
    InfomatsModule,
    FilesModule,
    UploadedFilesModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
