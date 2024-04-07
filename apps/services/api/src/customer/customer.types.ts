import { Customer } from "./models/customer.entity";

export interface CustomerWithBillingDetails<BillingDetails> {
  meta?: Customer;
  billingDetails: BillingDetails;
}

