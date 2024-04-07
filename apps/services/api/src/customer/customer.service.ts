import { Injectable } from "@nestjs/common";
import { Customer } from "./models/customer.entity";
import { CustomerWithBillingDetails } from "./customer.types";

@Injectable()
export class CustomerService<BillingDetails> implements CustomerWithBillingDetails<BillingDetails> {
    meta: Customer;
    billingDetails: BillingDetails;
  
    constructor(meta: Customer, billingDetails: BillingDetails) {
      this.meta = meta;
      this.billingDetails = billingDetails;
    }
  
    createCustomer(): Promise<CustomerWithBillingDetails<BillingDetails>> {
      throw new Error('Method not implemented');
    }
    updateCustomer(): Promise<CustomerWithBillingDetails<BillingDetails>> {
      throw new Error('Method not implemented');
    }
    deleteCustomer(): Promise<CustomerWithBillingDetails<BillingDetails>> {
      throw new Error('Method not implemented');
    }
    getCustomer(): Promise<CustomerWithBillingDetails<BillingDetails>> {
      throw new Error('Method not implemented');
    }
  }