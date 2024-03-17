import { Customer } from 'src/core/Customer';
import { PaymentMethod } from 'src/core/PaymentMethod';
import {
  EcoCashPaymentRequest,
  EcocashPaymentRequest,
} from 'src/core/params/EcocashPaymentRequest';
import {
  EcoCashPaymentResponse,
  EcocashBillingDetails,
} from 'src/payment/eco-cash/eco-cash.interface';
import { PaymentStrategy } from 'src/payment/payments.interface';

export class EcoCashStrategy extends PaymentMethod {
  authorize(): Promise<PaymentResponse> {
    throw new Error('Method not implemented.');
  }
  capture(): Promise<PaymentResponse> {
    throw new Error('Method not implemented.');
  }

  bill(captureParams: object, amount: number): Promise<PaymentResponse> {
    const customer = this.buildCustomerObject(
      captureParams as {
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
}
