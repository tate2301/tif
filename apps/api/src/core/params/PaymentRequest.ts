import { CURRENCIES, PAYMENT_METHODS } from 'src/payment/payments.interface';
import { Customer } from '../Customer';

export interface PaymentRequest<BillingDetails> {
  customer: Customer<BillingDetails>;
  paymentMethod: PAYMENT_METHODS;
  amount: number;
  currency: CURRENCIES;
}
