import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { writeFileSync } from 'fs';
import { AppModule } from './app.module';
export * as fs from 'fs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api');

  const config = new DocumentBuilder()
    .setTitle('Управление инфоматом')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config, {
    ignoreGlobalPrefix: false,
  });

  writeFileSync('./swagger-spec.json', JSON.stringify(document));
  SwaggerModule.setup('doc', app, document);

  await app.listen(8000);
}
bootstrap();
