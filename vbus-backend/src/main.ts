import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.enableCors(); // <--- Add CORS
  const port = parseInt(process.env.PORT || '3002', 10);
  await app.listen(port, '0.0.0.0');

  console.log(`Server running on http://localhost:${port}`);
}


bootstrap();
