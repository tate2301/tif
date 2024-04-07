import { Module } from '@nestjs/common';
import { PaymentSession as PaymentSession } from './models/payment_session.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SessionController } from './session.controller';
import { SessionService } from './session.service';
import { PaymentSessionProducts } from './models/payment_session_products.entity';
import { Product } from 'src/product/models/product.entity';
import { Merchant } from 'src/user/models/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      PaymentSession,
      PaymentSessionProducts,
      Product,
      Merchant,
    ]),
  ],
  controllers: [SessionController],
  providers: [SessionService],
})
export class SessionModule {}
