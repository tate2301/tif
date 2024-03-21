import { Injectable } from '@nestjs/common';

export interface IPaymentSession {
  create(): Promise<any>;
  revoke(): Promise<any>;
  get(): Promise<any>;
  update(): Promise<any>;
}

@Injectable()
export class PaymentSessionService {}
