import { PaymentResponse } from '../payments.interface';

export type EcocashBillingDetails = {
  msisdn: string;
};

export interface EcoCashPaymentResponse extends PaymentResponse {}
