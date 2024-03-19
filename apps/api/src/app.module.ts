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
import { PayService } from './pay/pay.service';
import { PayController } from './pay/pay.controller';
import configuration from './common/env';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      // New
      rootPath: join(__dirname, '..', 'client/dist'), // New
    }),
    ConfigModule.forRoot({
      load: [configuration],
    }),
    PaymentModule,
    WebhookModule,
    AuthModule,
  ],
  controllers: [AppController, RefundsController, PayController],
  providers: [
    AppService,
    AnayticsService,
    RefundsService,
    ApiKeyService,
    SuperRefundsService,
    PayService,
  ],
})
export class AppModule {}
