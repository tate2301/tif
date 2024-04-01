import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaymentModule } from './payment/payment.module';
import { AuthModule } from './auth/auth.module';
import { AnayticsService } from './anaytics/anaytics.service';
import { RefundsService, SuperRefundsService } from './refunds/refunds.service';
import { ApiKeyService } from './api-key/api-key.service';
import { WebhookModule } from './webhook/webhook.module';
import { RefundsController } from './refunds/refunds.controller';
import { SessionController } from './session/session.controller';
import configuration from './common/env';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SessionModule } from './session/session.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'test',
      synchronize: true,
      autoLoadEntities: true,
    }),
    PaymentModule,
    WebhookModule,
    AuthModule,
    SessionModule,
  ],
  controllers: [AppController, RefundsController, SessionController],
  providers: [
    AppService,
    AnayticsService,
    RefundsService,
    ApiKeyService,
    SuperRefundsService,
  ],
  
})
export class AppModule {}
