import { PaymentStrategy } from 'src/payment/payments.interface';
import {
  ZimSwitchPaymentRequest,
  ZimSwitchPaymentResponse,
} from './zim-switch.interface';

export class ZimSwitchStrategy
  implements
    PaymentStrategy<ZimSwitchPaymentRequest, ZimSwitchPaymentResponse> {
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
