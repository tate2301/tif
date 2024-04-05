import { PAYMENT_METHODS } from 'src/common/enum';
import { InitiateCheckoutDto } from './dto/checkout_session.dto';
import { RefundDto } from './dto/refund.dto';
import { VoidDto } from './dto/void.dto';
import { ExecutePaymentDto } from './payment.service';
import Payment from './models/payment.entity';
import { Charge } from './models/charge.entity';

export interface IPaymentService {
  isTestingMode: boolean;
  setTestingMode(isTesting: boolean): void;
  createCheckoutSession(checkoutDetails: InitiateCheckoutDto): Promise<string>;
  executePayment(
    paymentId: string,
    paymentMethod: PAYMENT_METHODS,
    paymentDetails: ExecutePaymentDto,
  ): Promise<PaymentResponse>;
  voidPayment(paymentId: string, request: VoidDto): Promise<Payment>;
  refundTransaction(
    paymentId: string,
    request: RefundDto,
  ): Promise<PaymentResponse>;
  getTransactionDetails(paymentId: string): Promise<Payment>;

  getPayment(paymentId: string): Promise<Payment>;
  getPayments(merchantId: string): Promise<Payment[]>;
  getChargesForPayment(paymentId: string): Promise<Charge[]>;
  getChargeDetail(paymentId: string, chargeId: string): Promise<Charge>;

  updatePaymentDetails(paymentId: string, details: any): Promise<Payment>;
}

export interface PaymentStrategy<TRequest, TResponse> {
  execute(paymentDetails: TRequest): Promise<TResponse>;
}

export interface Receipt {
  id: string;
  paymentId: string;
  amount: number;
  currency: string;
  paymentMethod: PAYMENT_METHODS;
  status: 'success' | 'failed' | 'pending';
  transactionDate: Date;
  merchantId: string; // Assuming each payment is linked to a specific merchant
  // Additional fields can be added as needed
}
export interface PaymentInitiationDetails {
  paymentMethod: PAYMENT_METHODS;
  paymentDetails: any;
}

export interface PaymentStatusRequest {
  paymentId: string;
}

export interface WebhookConfiguration {
  merchantId: string;
  webhookUrl: string;
}

export interface RefundRequest {
  paymentId: string;
  reason?: string; // Optional reason for the refund
}

export interface MerchantTransactionsRequest {
  merchantId: string;
}

export interface PaymentMethodConfiguration {
  merchantId: string;
  paymentMethod: PAYMENT_METHODS;
  configurationDetails: any; // This could include API keys, webhook URLs, etc.
}

export interface IPaymentController {
  initiatePayment(details: PaymentInitiationDetails): Promise<any>;
  getPaymentStatus(request: PaymentStatusRequest): Promise<any>;
  configureWebhook(config: WebhookConfiguration): Promise<any>;
  generateReceipt(paymentId: string): Promise<Receipt>;
  refundTransaction(request: RefundRequest): Promise<any>;
  listPaymentsForMerchant(request: MerchantTransactionsRequest): Promise<any[]>;
  configurePaymentMethod(config: PaymentMethodConfiguration): Promise<any>;
  getPaymentMethodConfiguration(
    merchantId: string,
  ): Promise<PaymentMethodConfiguration[]>;
}

export interface PaymentResponse {
  transactionId: string;
  status: 'success' | 'failed';
}

export type LineItem = {
  id: string;
  name: string;
  quantity: number;
  amount: number;
  picture_url?: string;
};
