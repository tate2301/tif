import logger from 'src/common/logger';
import { PaymentMethod } from 'src/common/abstract/payment_method';
import { EcocashPaymentRequest } from 'src/common/params/EcocashPaymentRequest';
import { CustomerWithBillingDetails } from 'src/customer/customer.types';
import { Customer } from 'src/customer/models/customer.entity';

export type EcocashBillingDetails = {
  msisdn: string;
};

export interface EcoCashPaymentResponse extends PaymentResponse {}


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
    logger.info('Billing customer', customer, amount);
    throw new Error('Method not implemented.');
  }

  refund(): Promise<PaymentResponse> {
    throw new Error('Method not implemented.');
  }

  void(): Promise<PaymentResponse> {
    throw new Error('Method not implemented.');
  }

  async buildCustomerObject(captureParams: {
    mobile_number: string;
  }): Promise<CustomerWithBillingDetails<EcocashBillingDetails>> {
    const customer_profile = new Customer()
    const customer: CustomerWithBillingDetails<EcocashBillingDetails> = {
      meta: customer_profile,
      billingDetails:EcocashPaymentRequest.generateBillingDetails(captureParams.mobile_number),
    }
    
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
