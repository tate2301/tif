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

  /**
   * Retrieves a payment by its ID.
   * @param paymentId - The ID of the payment.
   * @returns A Promise that resolves to the Payment object.
   */
  async getPayment(paymentId: string): Promise<Payment> {
    return this.paymentRepository.findOne({ where: { id: paymentId } });
  }

  /**
   * Retrieves all payments for a given merchant.
   * @param merchantId - The ID of the merchant.
   * @returns A Promise that resolves to an array of Payment objects.
   */
  async getPayments(merchantId: string): Promise<Payment[]> {
    return this.paymentRepository.find({ where: { merchantId } });
  }

  /**
   * Retrieves all charges for a given payment.
   * @param paymentId - The ID of the payment.
   * @returns A Promise that resolves to an array of Charge objects.
   */
  async getChargesForPayment(paymentId: string): Promise<Charge[]> {
    return this.chargeService.getChargesForPayment(paymentId);
  }

  /**
   * Retrieves the details of a specific charge for a payment.
   * @param paymentId - The ID of the payment.
   * @param chargeId - The ID of the charge.
   * @returns A Promise that resolves to the Charge object.
   */
  async getChargeDetail(paymentId: string, chargeId: string): Promise<Charge> {
    return this.getChargeDetail(paymentId, chargeId);
  }

  /**
   * Sets the testing mode for the payment service.
   * @param isTesting - A boolean indicating whether testing mode should be enabled or disabled.
   */
  setTestingMode(isTesting: boolean): void {
    this.isTestingMode = isTesting;
  }

  /**
   * Creates a checkout session for initiating a payment.
   * @param checkoutDetails - The details of the checkout.
   * @returns A Promise that resolves to the URL of the checkout session.
   */
  async createCheckoutSession(
    checkoutDetails: InitiateCheckoutDto,
  ): Promise<string> {
    return `${process.env.PAYMENT_GATEWAY}/checkout?mode=${checkoutDetails.mode}&paymentMethod=${checkoutDetails.payment_method}`;
  }

  /**
   * Executes a payment using the specified payment method and details.
   * @param paymentId - The ID of the payment.
   * @param paymentMethod - The payment method to use.
   * @param paymentDetails - The details of the payment.
   * @returns A Promise that resolves to the PaymentResponse object.
   */
  executePayment(
    paymentId: string,
    paymentMethod: PAYMENT_METHODS,
    paymentDetails: ExecutePaymentDto,
  ): Promise<PaymentResponse> {
    throw new Error('Method not implemented.');
  }

  /**
   * Voids a payment.
   * @param paymentId - The ID of the payment.
   * @param voidRequest - The void request details.
   * @returns A Promise that resolves to the PaymentResponse object.
   */
  voidPayment(
    paymentId: string,
    voidRequest: VoidDto,
  ): Promise<PaymentResponse> {
    throw new Error('Method not implemented.');
  }

  /**
   * Refunds a transaction.
   * @param paymentId - The ID of the payment.
   * @param refundRequest - The refund request details.
   * @returns A Promise that resolves to the PaymentResponse object.
   */
  refundTransaction(
    paymentId: string,
    refundRequest: RefundDto,
  ): Promise<PaymentResponse> {
    throw new Error('Method not implemented.');
  }

  /**
   * Retrieves the details of a transaction.
   * @param paymentId - The ID of the payment.
   * @returns A Promise that resolves to the PaymentResponse object.
   */
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
