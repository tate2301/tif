import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaymentModule } from './payment/payment.module';
import { AuthModule } from './auth/auth.module';
import { WebhookModule } from './webhook/webhook.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SessionModule } from './session/session.module';
import { UsersModule } from './user/user.module';
import env from './common/env';
import { APIKeyModule } from './api-key/api-key.module';
import { HealthModule } from './health/health.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { ProductModule } from './product/product.module';
import { ChargeModule } from './charge/charge.module';
import { ReportsModule } from './reports/reports.module';
import { PaymentLinkModule } from './link/link.module';
import { AnalyticsModule } from './anaytics/analytics.module';
import { CurrencyModule } from './currency/currency.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env', '.env.example', '.env.development'],
      load: [env],
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '',
      database: 'tif',
      synchronize: true,
      autoLoadEntities: true,
    }),
    HealthModule,
    AuthModule,
    APIKeyModule,
    UsersModule,
    PaymentModule,
    WebhookModule,
    SessionModule,
    ProductModule,
    ChargeModule,
    ReportsModule,
    PaymentLinkModule,
    AnalyticsModule,
    CurrencyModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: AuthInterceptor,
    },
  ],
})
export class AppModule {}
