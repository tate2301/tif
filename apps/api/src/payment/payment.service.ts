import { Injectable } from '@nestjs/common';
import { IsNotEmpty, IsString, IsObject } from 'class-validator';
import { PAYMENT_METHODS } from 'src/payment/payments.interface';
import { EcoCashStrategy } from './eco-cash/eco-cash.service';
import { PaymentMethod } from 'src/core/PaymentMethod';

@Injectable()
export class PaymentService {
  private strategies: Map<PAYMENT_METHODS, PaymentMethod> = new Map();

  constructor(ecoCashStrategy: EcoCashStrategy) {
    // Map each strategy to its corresponding payment method
    this.strategies.set(PAYMENT_METHODS.EcoCash, ecoCashStrategy);
  }

  async executePayment(
    paymentMethod: PAYMENT_METHODS,
    paymentDetails: any,
  ): Promise<any> {
    const strategy = this.strategies.get(paymentMethod);

    if (!strategy) {
      throw new Error(`Unsupported payment method: ${paymentMethod}`);
    }

    return strategy.bill(paymentDetails, 90.9);
  }

  async generatePaymentURL() {}

  completePayment(transactionId: string) {}
  cancelPayment(transactionId: string) {}
  getPaymentStatus(transactionId: string) {}
}

export class InitiatePaymentDto {
  @IsNotEmpty()
  @IsString()
  paymentMethod: string;

  @IsNotEmpty()
  @IsObject()
  paymentDetails: any;
}
