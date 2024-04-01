import { EcocashBillingDetails } from 'src/payment/eco-cash/eco-cash.interface';
import { Customer } from '../Customer';
import { PaymentReponse } from './PaymentResponse';

export class EcoCashPaymentResponse extends PaymentReponse<EcocashBillingDetails> {
  getMaskedCustomerDetails(): Customer<EcocashBillingDetails> {
    let msisdn = '0';
    msisdn += this.customer.billingDetails.msisdn.toString().slice(0, 3);
    msisdn += '****';
    msisdn += this.customer.billingDetails.msisdn.toString().slice(7, 10);
    this.customer.billingDetails.msisdn = msisdn;
    return this.customer;
  }

  override getResponse(): object {
    const maskedCustomer = this.getMaskedCustomerDetails();
    return {
      success: this.success,
      transactionId: this.transactionId,
      message: this.message,
      remarks: this.remarks,
      timestamp: this.timestamp,
      customer: {
        ...maskedCustomer.meta,
        ...maskedCustomer.billingDetails,
      },
    };
  }
}
