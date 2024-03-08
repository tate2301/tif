import { PAYMENT_METHODS } from "./types";

export interface IPaymentMethod {
    charge(amount: PAYMENT_METHODS): Promise<void>
}