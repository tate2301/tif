import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { EcoCashStrategy } from './strategy/eco-cash.strategy';
import { ZimSwitchStrategy } from './strategy/zim-switch.strategy';
import DPayment from './models/payment.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from 'src/auth/guard/jwt.guard';
import { ApiKeyGuard } from 'src/auth/guard/apikey-auth.guard';

@Module({
  imports: [
    TypeOrmModule.forFeature([DPayment]),
    EcoCashStrategy,
    ZimSwitchStrategy,
  ],
  providers: [PaymentService, EcoCashStrategy, ZimSwitchStrategy, {
      provide: APP_GUARD,
      useClass: ApiKeyGuard,
    },
  ],
  controllers: [PaymentController],
})
export class PaymentModule {}
