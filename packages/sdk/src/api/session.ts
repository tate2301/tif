import { VelocityPaymentSessionClient } from "../types";

export class PaymentSessionClient implements VelocityPaymentSessionClient {
  constructor(private client: any) {}
  create(): void {
    throw new Error("Method not implemented.");
  }
  get(): void {
    throw new Error("Method not implemented.");
  }
  void(): void {
    throw new Error("Method not implemented.");
  }
  update(): void {
    throw new Error("Method not implemented.");
  }
}
