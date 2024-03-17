import { Customer } from 'src/core/Customer';
import { PaymentMethod } from 'src/core/PaymentMethod';
import { EcocashPaymentRequest } from 'src/core/params/EcocashPaymentRequest';
import { EcocashBillingDetails } from 'src/payment/eco-cash/eco-cash.interface';

export class EcoCashStrategy extends PaymentMethod {
  authorize(): Promise<PaymentResponse> {
    throw new Error('Method not implemented.');
  }
  capture(): Promise<PaymentResponse> {
    throw new Error('Method not implemented.');
  }

  bill(billParams: object, amount: number): Promise<PaymentResponse> {
    const customer = this.buildCustomerObject(
      billParams as {
        mobile_number: string;
      },
    );
    throw new Error('Method not implemented.');
  }

  refund(): Promise<PaymentResponse> {
    throw new Error('Method not implemented.');
  }

  void(): Promise<PaymentResponse> {
    throw new Error('Method not implemented.');
  }

  buildCustomerObject(captureParams: {
    mobile_number: string;
  }): Customer<EcocashBillingDetails> {
    const customer = new Customer<EcocashBillingDetails>(
      null,
      EcocashPaymentRequest.generateBillingDetails(captureParams.mobile_number),
    );

    return customer;
  }

  getTestPaymentDetails<EcocashBillingDetails>(): {
    success: Array<EcocashBillingDetails>;
    failure: Array<EcocashBillingDetails>;
  } {
    return {
      success: [],
      failure: [],
    };
  }

  isTestPayment(msisdn: string): boolean {
    const testDetails = this.getTestPaymentDetails<EcocashBillingDetails>();
    const failureDetails = testDetails.success.map((item) => item.msisdn);
    const successDetails = testDetails.failure.map((item) => item.msisdn);

    return [...failureDetails, successDetails].includes(msisdn);
  }
}
