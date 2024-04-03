import { Injectable } from '@nestjs/common';
import { IsNotEmpty, IsString, IsObject } from 'class-validator';
import {
  IPaymentService,
  PaymentResponse,
} from 'src/payment/payments.interface';
import { EcoCashStrategy } from './strategy/eco-cash.strategy';
import { PaymentMethod } from 'src/common/abstract/payment_method';
import { InitiateCheckoutDto } from './dto/checkout_session.dto';
import { VoidDto } from './dto/void.dto';
import { RefundDto } from './dto/refund.dto';
import Payment from './models/payment.entity';
import { Repository } from 'typeorm';
import { PAYMENT_METHODS } from 'src/common/enum';
import { InjectRepository } from '@nestjs/typeorm';
import { Charge } from './models/charge.entity';
import { ChargeService } from './services/charge.service';

@Injectable()
export class PaymentService implements IPaymentService {
  private strategies: Map<PAYMENT_METHODS, PaymentMethod> = new Map();
  isTestingMode: boolean = false;

  constructor(
    @InjectRepository(Payment) private paymentRepository: Repository<Payment>,
    ecoCashStrategy: EcoCashStrategy,
    private chargeService: ChargeService,
  ) {
    // Map each strategy to its corresponding payment method
    this.strategies.set(PAYMENT_METHODS.EcoCash, ecoCashStrategy);
  }

  async getPayment(paymentId: string): Promise<Payment> {
    return this.paymentRepository.findOne({ where: { id: paymentId } });
  }

  async getPayments(merchantId: string): Promise<Payment[]> {
    return this.paymentRepository.find({ where: { merchantId } });
  }

  async getChargesForPayment(paymentId: string): Promise<Charge[]> {
    return this.chargeService.getChargesForPayment(paymentId);
  }

  async getChargeDetail(paymentId: string, chargeId: string): Promise<Charge> {
    return this.getChargeDetail(paymentId, chargeId);
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
