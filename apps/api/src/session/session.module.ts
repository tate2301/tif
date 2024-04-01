import { Module } from '@nestjs/common';
import { DPaymentSession } from './data/payment_session.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SessionController } from './session.controller';
import { SessionService } from './session.service';

@Module({
  imports: [TypeOrmModule.forFeature([DPaymentSession])],
  controllers: [SessionController],
  providers: [SessionService],
})
export class SessionModule {}
