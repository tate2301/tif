import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { EcoCashStrategy } from './eco-cash/eco-cash.service';
import { ZimSwitchStrategy } from './zim-switch/zim-switch.service';

@Module({
  imports: [EcoCashStrategy, ZimSwitchStrategy],
  providers: [PaymentService, EcoCashStrategy, ZimSwitchStrategy],
  controllers: [PaymentController],
})
export class PaymentModule {}
