import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaymentModule } from './payment/payment.module';
import { CentralLog as CentralLogService } from './central-log/central-log.service';
import { AuthModule } from './auth/auth.module';
import { AnayticsService } from './anaytics/anaytics.service';
import { RefundsService } from './refunds/refunds.service';
import { ApiKeyService } from './api-key/api-key.service';
import { WebhookModule } from './webhook/webhook.module';

@Module({
  imports: [PaymentModule, WebhookModule, AuthModule],
  controllers: [AppController],
  providers: [
    AppService,
    CentralLogService,
    AnayticsService,
    RefundsService,
    ApiKeyService,
  ],
})
export class AppModule {}
