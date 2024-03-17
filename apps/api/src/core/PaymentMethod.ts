export abstract class PaymentMethod {
  constructor(parameters) {}

  /**
   * This method is used to authorize a payment
   */
  abstract authorize(): Promise<PaymentResponse>;
  /**
   * This method is used to capture a previously authorized payment
   */
  abstract capture(): Promise<PaymentResponse>;
  /**
   * This method is used to authorize and capture in one step
   */
  abstract bill(
    apiParams: { [key: string]: any },
    amount: number,
  ): Promise<PaymentResponse>;
  /**
   * This method is used to refund a previously captured payment
   */
  abstract refund(): Promise<PaymentResponse>;
  /**
   * This method is used to void a previously authorized payment
   */
  abstract void(): Promise<PaymentResponse>;

  abstract getTestPaymentDetails<T>(): {
    success: Array<T>;
    failure: Array<T>;
  };
}
