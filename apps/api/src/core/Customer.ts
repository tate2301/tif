export interface ICustomer<BillingDetails> {
  meta?: CustomerMeta;
  billingDetails: BillingDetails;
}

export type CustomerMeta = {
  id: string;
  email: string;
  phone: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
};

export class Customer<BillingDetails> implements ICustomer<BillingDetails> {
  meta: CustomerMeta;
  billingDetails: BillingDetails;

  constructor(meta: CustomerMeta, billingDetails: BillingDetails) {
    this.meta = this.meta;
    this.billingDetails = this.billingDetails;
  }

  createCustomer(): Promise<ICustomer<BillingDetails>> {
    throw new Error('Method not implemented');
  }
  updateCustomer(): Promise<ICustomer<BillingDetails>> {
    throw new Error('Method not implemented');
  }
  deleteCustomer(): Promise<ICustomer<BillingDetails>> {
    throw new Error('Method not implemented');
  }
  getCustomer(): Promise<ICustomer<BillingDetails>> {
    throw new Error('Method not implemented');
  }
}
