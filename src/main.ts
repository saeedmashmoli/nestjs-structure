import { ValidationPipe } from '@nestjs/common';
import {  ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { config } from 'dotenv';
import { AppModule } from './app.module';
import { loadEnviromentVariables } from './loader';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(app.get(ConfigService).get('SERVER_PORT'));
}
bootstrap();
