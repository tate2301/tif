import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaymentModule } from './payment/payment.module';
import { AuthModule } from './auth/auth.module';
import { AnayticsService } from './anaytics/anaytics.service';
import { RefundsService } from './refunds/refunds.service';
import { ApiKeyService } from './api-key/api-key.service';
import { WebhookModule } from './webhook/webhook.module';
import { RefundsController } from './refunds/refunds.controller';
import configuration from './common/env';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    PaymentModule,
    WebhookModule,
    AuthModule,
  ],
  controllers: [AppController, RefundsController],
  providers: [AppService, AnayticsService, RefundsService, ApiKeyService],
})
export class AppModule {}
