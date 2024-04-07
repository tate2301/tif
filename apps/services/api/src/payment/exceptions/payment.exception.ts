export class PaymentVoidedException extends Error {
  constructor() {
    super('Payment has been voided.');
  }
}

export class PaymentAlreadyProcessedException extends Error {
  constructor() {
    super('Payment has already been processed.');
  }
}
