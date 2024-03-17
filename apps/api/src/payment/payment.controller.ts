import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { InitiatePaymentDto, PaymentService } from './payment.service';
import { PAYMENT_METHODS } from 'src/payment/payments.interface';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post()
  async initiatePayment(
    @Body()
    body: {
      paymentMethod: PAYMENT_METHODS;
      paymentDetails: InitiatePaymentDto;
    },
  ) {
    return this.paymentService.executePayment(
      body.paymentMethod,
      body.paymentDetails,
    );
  }

  @Get(':paymentId')
  async getPaymentStatus(@Param('paymentId') paymentId: string) {
    // Implementation to query and return the payment status
  }
}
