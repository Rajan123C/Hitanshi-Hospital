import { NestFactory } from '@nestjs/core';
import { ValidationPipe, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import helmet from 'helmet';
import { AppModule } from './app.module';

process.env.DATABASE_URL = process.env.DATABASE_URL || "file:./dev.db";
import { AllExceptionsFilter } from './common/filters';
import { TransformInterceptor } from './common/interceptors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const logger = new Logger('Bootstrap');

  // Security
  app.use(helmet());

  // CORS
  const frontendUrl = configService.get<string>('FRONTEND_URL');
  const origins = ['http://localhost:3000'];
  if (frontendUrl) {
    origins.push(frontendUrl);
    // Also add version with/without trailing slash if needed
    if (frontendUrl.endsWith('/')) {
      origins.push(frontendUrl.slice(0, -1));
    } else {
      origins.push(`${frontendUrl}/`);
    }
  }

  app.enableCors({
    origin: origins,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: [
      'Content-Type', 
      'Authorization', 
      'X-Requested-With', 
      'Accept',
      'Origin',
    ],
    exposedHeaders: ['Set-Cookie'],
  });

  // Global prefix
  app.setGlobalPrefix('api');

  // Global pipes
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  // Global filters & interceptors
  app.useGlobalFilters(new AllExceptionsFilter());
  app.useGlobalInterceptors(new TransformInterceptor());

  const port = configService.get<number>('API_PORT') || 3001;
  await app.listen(port);

  logger.log(`🚀 MediBook API running on http://localhost:${port}/api`);
}

bootstrap();
