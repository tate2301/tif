import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { EcoCashStrategy } from './eco-cash/eco-cash.service';
import { ZimSwitchStrategy } from './zim-switch/zim-switch.service';
import DPayment from './models/payment.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from 'src/auth/guard/jwt.guard';

@Module({
  imports: [
    TypeOrmModule.forFeature([DPayment]),
    EcoCashStrategy,
    ZimSwitchStrategy,
  ],
  providers: [PaymentService, EcoCashStrategy, ZimSwitchStrategy, {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
  controllers: [PaymentController],
})
export class PaymentModule {}
