import { CustomerWithBillingDetails } from 'src/customer/customer.types';
import { PaymentRequest } from './PaymentRequest';
import { EcocashBillingDetails } from 'src/payment/strategy/eco-cash.strategy';
import { CURRENCIES, PAYMENT_METHODS } from 'src/common/enum';

export interface EcoCashPaymentRequest
  extends PaymentRequest<EcocashBillingDetails> {}

export class EcocashPaymentRequest implements EcoCashPaymentRequest {
  customer: CustomerWithBillingDetails<EcocashBillingDetails>;
  paymentMethod: PAYMENT_METHODS;
  amount: number;
  currency: CURRENCIES;

  constructor(
    customer: CustomerWithBillingDetails<EcocashBillingDetails>,
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
