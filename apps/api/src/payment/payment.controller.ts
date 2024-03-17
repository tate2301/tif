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
import { InitiateCheckoutDto } from './dto/checkout.dto';
import { RefundDto } from './dto/refund.dto';
import { VoidDto } from './dto/void.dto';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post('checkout')
  @HttpCode(HttpStatus.CREATED)
  async create_checkout_session(@Body() checkoutDetails: InitiateCheckoutDto) {
    return this.paymentService.createCheckoutSession(checkoutDetails);
  }

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

  @Put(':payment_id/refund')
  @HttpCode(HttpStatus.CREATED)
  async refund(
    @Param('payment_id') payment_id: string,
    @Body() refundRequest: RefundDto,
  ) {
    // Logic to handle checkout operation
    // This might involve calling a method in PaymentService or another service dedicated to handling checkouts
    return this.paymentService.refundTransaction(payment_id, refundRequest);
  }

  @Delete(':payment_id/void')
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
  }
}
