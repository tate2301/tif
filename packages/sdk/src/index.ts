import {
  VelocityMerchantClient,
  VelocityPaymentClient,
  VelocityPaymentLinkClient,
  VelocityPaymentSessionClient,
} from "./types";

export interface VelocityClient {
  publishable_key: string;
  secret_key: string;

  merchant: VelocityMerchantClient;
  payment: VelocityPaymentClient;
  session: VelocityPaymentSessionClient;
  link: VelocityPaymentLinkClient;

  /**
   * Creates a new Velocity client.
   * @param {string} publishable_key - The publishable key.
   * @param {string} secret_key - The secret key.
   */
  constructor(publishable_key: string, secret_key: string): VelocityClient;

  /**
   * Gets the publishable key.
   * @returns {string} The publishable key.
   */
  getPublishableKey(): string;

  /**
   * Gets the secret key.
   * @returns {string} The secret key.
   */
  getSecretKey(): string;

  /**
   * Sets the publishable key.
   * @param {string} publishable_key - The publishable key.
   */
  setPublishableKey(publishable_key: string): void;

  /**
   * Sets the secret key.
   * @param {string} secret_key - The secret key.
   */
  setSecretKey(secret_key: string): void;
}

class Velocity implements VelocityClient {
  publishable_key: string;
  secret_key: string;

  merchant: VelocityMerchantClient;
  payment: VelocityPaymentClient;
  session: VelocityPaymentSessionClient;
  link: VelocityPaymentLinkClient;

  constructor(publishable_key: string, secret_key: string) {
    this.publishable_key = publishable_key;
    this.secret_key = secret_key;

    this.merchant = {
      getMerchantProfile: () => {},
      updateMerchantProfile: () => {},
      getMerchantKeys: () => {},
      getPaymentSessions: () => {},
      getPayments: () => {},
      getCharges: () => {},
      getCustomers: () => {},
      getProducts: () => {},
    };

    this.payment = {
      createPayment: () => {},
      getPayment: () => {},
      voidPayment: () => {},
      updatePayment: () => {},
    };

    this.session = {
      createPaymentSession: () => {},
      getPaymentSession: () => {},
      voidPaymentSession: () => {},
      updatePaymentSession: () => {},
    };

    this.link = {
      createPaymentLink: () => {},
      getPaymentLink: () => {},
      updatePaymentLink: () => {},
      deletePaymentLink: () => {},
    };
  }
  ["constructor"](publishable_key: string, secret_key: string): VelocityClient {
    throw new Error("Method not implemented.");
  }

  getPublishableKey(): string {
    return this.publishable_key;
  }

  getSecretKey(): string {
    return this.secret_key;
  }

  setPublishableKey(publishable_key: string): void {
    this.publishable_key = publishable_key;
  }

  setSecretKey(secret_key: string): void {
    this.secret_key = secret_key;
  }
}

export default Velocity;
