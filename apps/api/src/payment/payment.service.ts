import { Injectable } from '@nestjs/common';
import { IsNotEmpty, IsString, IsObject } from 'class-validator';
import {
  IPaymentService,
  PAYMENT_METHODS,
  PaymentResponse,
} from 'src/payment/payments.interface';
import { EcoCashStrategy } from './eco-cash/eco-cash.service';
import { PaymentMethod } from 'src/core/PaymentMethod';
import { InitiateCheckoutDto } from './dto/checkout.dto';
import { VoidDto } from './dto/void.dto';
import { RefundDto } from './dto/refund.dto';
import { InjectRepository } from '@nestjs/typeorm';
import DPayment from './data/payment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PaymentService implements IPaymentService {
  private strategies: Map<PAYMENT_METHODS, PaymentMethod> = new Map();
  isTestingMode: boolean = false;

  constructor(
    @InjectRepository(DPayment) private paymentRepository: Repository<DPayment>,
    ecoCashStrategy: EcoCashStrategy,
  ) {
    // Map each strategy to its corresponding payment method
    this.strategies.set(PAYMENT_METHODS.EcoCash, ecoCashStrategy);
  }

  setTestingMode(isTesting: boolean): void {
    this.isTestingMode = isTesting;
  }

  async createCheckoutSession(
    checkoutDetails: InitiateCheckoutDto,
  ): Promise<string> {
    return `${process.env.PAYMENT_GATEWAY}/checkout?mode=${checkoutDetails.mode}&paymentMethod=${checkoutDetails.payment_method}`;
  }

  executePayment(
    paymentId: string,
    paymentMethod: PAYMENT_METHODS,
    paymentDetails: ExecutePaymentDto,
  ): Promise<PaymentResponse> {
    throw new Error('Method not implemented.');
  }

  voidPayment(
    paymentId: string,
    voidRequest: VoidDto,
  ): Promise<PaymentResponse> {
    throw new Error('Method not implemented.');
  }

  refundTransaction(
    paymentId: string,
    refundRequest: RefundDto,
  ): Promise<PaymentResponse> {
    throw new Error('Method not implemented.');
  }

  getTransactionDetails(paymentId: string): Promise<PaymentResponse> {
    throw new Error('Method not implemented.');
  }
}

export class ExecutePaymentDto {
  @IsNotEmpty()
  @IsString()
  paymentMethod: string;

  @IsNotEmpty()
  @IsObject()
  paymentDetails: any;
}
