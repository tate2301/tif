import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { EcoCashStrategy } from './strategy/eco-cash.strategy';
import { ZimSwitchStrategy } from './strategy/zim-switch.strategy';
import Payment from './models/payment.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Discount } from './models/discount.entity';
import { Charge } from './models/charge.entity';
import { ChargeService } from './services/charge.service';
import { PaymentSession } from 'src/session/models/payment_session.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Payment, Discount, Charge, PaymentSession]),
    EcoCashStrategy,
    ZimSwitchStrategy,
  ],
  providers: [
    PaymentService,
    ChargeService,
    EcoCashStrategy,
    ZimSwitchStrategy,
  ],
  controllers: [PaymentController],
})
export class PaymentModule {}
