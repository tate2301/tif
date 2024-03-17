import { PAYMENT_METHODS } from 'src/payment/payments.interface';
import CoreResponse from '.';
import { Customer } from '../Customer';

export abstract class PaymentReponse<BillingDetails> extends CoreResponse {
  payment_method: PAYMENT_METHODS;
  customer: Customer<BillingDetails>;

  constructor(
    success: boolean,
    transactionId: string,
    message: string | null,
    remarks: string | null,
    payment_method: PAYMENT_METHODS,
    customer: Customer<BillingDetails>,
  ) {
    super(success, transactionId, message, remarks);
    this.payment_method = payment_method;
    this.customer = customer;
  }

  abstract getResponse(): object;
}
