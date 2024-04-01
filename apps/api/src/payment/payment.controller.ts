import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  HttpCode,
  HttpStatus,
  Put,
  Delete,
} from '@nestjs/common';
import { ExecutePaymentDto, PaymentService } from './payment.service';
import { PAYMENT_METHODS } from 'src/payment/payments.interface';
import { RefundDto } from './dto/refund.dto';
import { VoidDto } from './dto/void.dto';
import logger from 'src/common/logger';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post(':payment_id/capture/:payment_method')
  @HttpCode(HttpStatus.CREATED)
  async charge(
    @Param('payment_id') payment_id: string,
    @Param('payment_method') payment_method: string,
    @Body() checkoutDetails: ExecutePaymentDto,
  ) {
    // Logic to handle checkout operation
    // This might involve calling a method in PaymentService or another service dedicated to handling checkouts
    return this.paymentService.executePayment(
      payment_id,
      payment_method as PAYMENT_METHODS,
      checkoutDetails,
    );
  }

  @Put(':payment_id')
  @HttpCode(HttpStatus.CREATED)
  async updatePayment(
    @Param('payment_id') payment_id: string,
    @Body() refundRequest: RefundDto,
  ) {
    // Logic to handle checkout operation
    // This might involve calling a method in PaymentService or another service dedicated to handling checkouts
    return this.paymentService.refundTransaction(payment_id, refundRequest);
  }

  @Delete(':payment_id')
  @HttpCode(HttpStatus.CREATED)
  async void(
    @Param('payment_id') payment_id: string,
    @Body() voidRequest: VoidDto,
  ) {
    // Logic to handle checkout operation
    // This might involve calling a method in PaymentService or another service dedicated to handling checkouts
    return this.paymentService.voidPayment(payment_id, voidRequest);
  }

  @Get(':payment_id')
  async getPaymentStatus(@Param('payment_id') payment_id: string) {
    // Implementation to query and return the payment status
    logger.info(`Getting payment status for payment_id: ${payment_id}`);
  }
}
