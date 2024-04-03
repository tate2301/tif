import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaymentModule } from './payment/payment.module';
import { AuthModule } from './auth/auth.module';
import { AnayticsService } from './anaytics/anaytics.service';
import { ApiKeyService } from './api-key/api-key.service';
import { WebhookModule } from './webhook/webhook.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SessionModule } from './session/session.module';
import { UsersModule } from './user/user.module';
import env from './common/env';
import { APIKeyModule } from './api-key/api-key.module';
import { HealthModule } from './health/health.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env', '.env.example', '.env.development'],
      load: [env],
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'tif',
      synchronize: true,
      autoLoadEntities: true,
    }),
    PaymentModule,
    WebhookModule,
    AuthModule,
    SessionModule,
    UsersModule,
    APIKeyModule,
    HealthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    AnayticsService,
    // {
    //   provide: APP_INTERCEPTOR,
    //   useClass: AuthInterceptor,
    // }
  ],
})
export class AppModule {}
