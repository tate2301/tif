import { CustomerWithBillingDetails } from "src/customer/customer.types";
import { CURRENCIES, PAYMENT_METHODS } from "../enum";

export interface PaymentRequest<BillingDetails> {
  customer: CustomerWithBillingDetails<BillingDetails>;
  paymentMethod: PAYMENT_METHODS;
  amount: number;
  currency: CURRENCIES;
}
