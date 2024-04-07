import { PaymentStrategy } from 'src/payment/payments.interface';

export interface ZimSwitchPaymentRequest {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  amount: number;
}

export interface ZimSwitchPaymentResponse {
  transactionId: string;
  status: 'success' | 'failed';
}


export class ZimSwitchStrategy
  implements PaymentStrategy<ZimSwitchPaymentRequest, ZimSwitchPaymentResponse>
{
  async execute(
    paymentDetails: ZimSwitchPaymentRequest,
  ): Promise<ZimSwitchPaymentResponse> {
    // Logic to call ZimSwitch API
    return {
      transactionId: '1234',
      status: 'success',
    };
  }
}
