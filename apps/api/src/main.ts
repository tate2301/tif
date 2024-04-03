import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import logger from './common/logger';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  // const httpsOptions = {
  //   key: '', //fs.readFileSync(process.env.PRIVATE_KEY_PATH),
  //   cert: '', //fs.readFileSync(process.env.PUBLIC_CERT_PATH),
  // };
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('api');
  app.use(cookieParser());

  const config = new DocumentBuilder()
    .setTitle('TiF API')
    .setDescription('The TiF API description')
    .setVersion('1.0')
    .addTag('tif')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  logger.info(`Server started in ENV ${process.env.NODE_ENV ?? 'dev'}`);
  await app.listen(3000);
}
bootstrap();
