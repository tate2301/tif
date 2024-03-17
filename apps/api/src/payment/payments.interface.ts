export interface PaymentStrategy<TRequest, TResponse> {
  execute(paymentDetails: TRequest): Promise<TResponse>;
}

export enum PAYMENT_METHODS {
  EcoCash = 'EcoCash',
  ZimSwitch = 'ZimSwitch',
}

export enum CURRENCIES {
  USD = 'USD',
  ZWL = 'ZWL',
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
  listTransactionsForMerchant(
    request: MerchantTransactionsRequest,
  ): Promise<any[]>;
  configurePaymentMethod(config: PaymentMethodConfiguration): Promise<any>;
  getPaymentMethodConfiguration(
    merchantId: string,
  ): Promise<PaymentMethodConfiguration[]>;
}

export interface PaymentResponse {
  transactionId: string;
  status: 'success' | 'failed';
}
