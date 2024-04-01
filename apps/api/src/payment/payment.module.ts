import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { EcoCashStrategy } from './eco-cash/eco-cash.service';
import { ZimSwitchStrategy } from './zim-switch/zim-switch.service';
import DPayment from './models/payment.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([DPayment]),
    EcoCashStrategy,
    ZimSwitchStrategy,
  ],
  providers: [PaymentService, EcoCashStrategy, ZimSwitchStrategy],
  controllers: [PaymentController],
})
export class PaymentModule {}
