import { EcocashBillingDetails } from 'src/payment/strategy/eco-cash.strategy';
import { PaymentReponse } from './PaymentResponse';
import { CustomerWithBillingDetails } from 'src/customer/customer.types';

export class EcoCashPaymentResponse extends PaymentReponse<EcocashBillingDetails> {
  getMaskedCustomerDetails(): CustomerWithBillingDetails<EcocashBillingDetails> {
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
