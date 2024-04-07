import { CustomerWithBillingDetails } from 'src/customer/customer.types';
import CoreResponse from '.';
import { PAYMENT_METHODS } from 'src/common/enum';

export abstract class PaymentReponse<BillingDetails> extends CoreResponse {
  payment_method: PAYMENT_METHODS;
  customer: CustomerWithBillingDetails<BillingDetails>;

  constructor(
    success: boolean,
    transactionId: string,
    message: string | null,
    remarks: string | null,
    payment_method: PAYMENT_METHODS,
    customer: CustomerWithBillingDetails<BillingDetails>,
  ) {
    super(success, transactionId, message, remarks);
    this.payment_method = payment_method;
    this.customer = customer;
  }

  abstract getResponse(): object;
}
