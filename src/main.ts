import { ValidationPipe } from '@nestjs/common';
import {  ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as session from 'express-session';
import * as passport from 'passport';
import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // use session for authenticated
  // app.use(
  //   session({
  //     secret: "test",
  //     resave: false,
  //     saveUninitialized: false,
  //     cookie: {maxAge: 360000}
  //   })
  // )
  // app.use(passport.initialize());
  // app.use(passport.session());
  app.useGlobalPipes(new ValidationPipe());
  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(process.env.SERVER_PORT);
}
bootstrap();
