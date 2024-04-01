import { PaymentRequest } from './PaymentRequest';
import { PAYMENT_METHODS, CURRENCIES } from 'src/payment/payments.interface';
import { Customer } from '../Customer';
import { EcocashBillingDetails } from 'src/payment/strategy/eco-cash.strategy';

export interface EcoCashPaymentRequest
  extends PaymentRequest<EcocashBillingDetails> {}

export class EcocashPaymentRequest implements EcoCashPaymentRequest {
  customer: Customer<EcocashBillingDetails>;
  paymentMethod: PAYMENT_METHODS;
  amount: number;
  currency: CURRENCIES;

  constructor(
    customer: Customer<EcocashBillingDetails>,
    paymentMethod: PAYMENT_METHODS,
    amount: number,
    currency: CURRENCIES,
  ) {
    this.customer = customer;
    this.paymentMethod = paymentMethod;
    this.amount = amount;
    this.currency = currency;
  }

  static generateBillingDetails(phone_number: string): EcocashBillingDetails {
    if (phone_number[0] === '+') {
      return {
        msisdn: phone_number.slice(3, phone_number.length),
      };
    }

    if (phone_number.slice(0, 2) === '00') {
      return {
        msisdn: phone_number.slice(4, phone_number.length),
      };
    }
    return {
      msisdn: phone_number,
    };
  }
}
