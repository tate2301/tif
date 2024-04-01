import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaymentModule } from './payment/payment.module';
import { AuthModule } from './auth/auth.module';
import { AnayticsService } from './anaytics/anaytics.service';
import { UsersService } from './user/service/user.service';
import { ApiKeyService } from './api-key/api-key.service';
import { WebhookModule } from './webhook/webhook.module';
import { UsersController } from './user/user.controller';
import { SessionController } from './session/session.controller';
import configuration from './common/env';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SessionModule } from './session/session.module';
import { MerchantService } from './user/service/merchant.service';
import { UsersModule } from './user/user.module';

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
    UsersModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    AnayticsService,
    ApiKeyService,
  ],
  
})
export class AppModule {}
