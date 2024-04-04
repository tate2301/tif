import { AxiosInstance } from "axios";
import {
  VelocityMerchantClient,
  VelocityPaymentClient,
  VelocityPaymentLinkClient,
  VelocityPaymentSessionClient,
  VelocityProductClient,
} from "./types";
import { createAPIKeyClient } from "./client";

export interface VelocityClient {
  merchant: VelocityMerchantClient;
  payment: VelocityPaymentClient;
  session: VelocityPaymentSessionClient;
  link: VelocityPaymentLinkClient;
  product: VelocityProductClient;
}

class Velocity implements VelocityClient {
  private publishable_key?: string;
  private secret_key?: string;
  enviroment: "server" | "client" = "client";
  private transportClient: AxiosInstance = {} as AxiosInstance;
  private baseURL: string;

  merchant: VelocityMerchantClient;
  payment: VelocityPaymentClient;
  session: VelocityPaymentSessionClient;
  link: VelocityPaymentLinkClient;
  product: VelocityProductClient;

  constructor(
    keys: {
      publishable_key?: string;
      secret_key?: string;
    },
    baseURL: string = "http://localhost:3000"
  ) {
    this.publishable_key = keys.publishable_key;
    this.secret_key = keys.secret_key;
    this.baseURL = baseURL;

    if (keys.secret_key) this.enviroment = "server";
    if (keys.publishable_key) this.enviroment = "client";

    this.configureTransportClient();

    this.merchant = {
      getProfile: () => {},
      updateProfile: () => {},
      getKeys: () => {},
      getPaymentSessions: () => {},
      getPayments: () => {},
      getCharges: () => {},
      getCustomers: () => {},
      getProducts: () => {},
    };

    this.payment = {
      create: () => {},
      get: () => {},
      void: () => {},
      update: () => {},
    };

    this.product = {
      create: () => {},
      get: () => {},
      update: () => {},
      delete: () => {},
    };

    this.session = {
      create: () => {},
      get: () => {},
      void: () => {},
      update: () => {},
    };

    this.link = {
      create: () => {},
      get: () => {},
      update: () => {},
      delete: () => {},
    };
  }

  private configureTransportClient() {
    if (this.enviroment === "server") {
      this.transportClient = createAPIKeyClient(this.secret_key, this.baseURL);
    }

    if (this.enviroment === "client") {
      this.transportClient = createAPIKeyClient(
        this.publishable_key,
        this.baseURL
      );
    }
  }

  private getPublishableKey(): string {
    if (!this.publishable_key) throw new Error("Publishable key not set");
    return this.publishable_key!;
  }

  private getSecretKey(): string {
    if (!this.secret_key) throw new Error("Secret key not set");
    return this.secret_key!;
  }

  setPublishableKey(publishable_key: string): void {
    this.publishable_key = publishable_key;
  }

  setSecretKey(secret_key: string): void {
    this.secret_key = secret_key;
  }
}

export default Velocity;
