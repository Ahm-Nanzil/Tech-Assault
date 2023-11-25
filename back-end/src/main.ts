import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

class APIDocument{
  static setup(app:INestApplication){
    const options = new DocumentBuilder().setTitle('Mad API').setDescription('this is description').build();

    const documents= SwaggerModule.createDocument(app,options,{ignoreGlobalPrefix:true});

    SwaggerModule.setup('docs',app,documents);
  }
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  APIDocument.setup(app);
  await app.listen(3000);
}
bootstrap();
