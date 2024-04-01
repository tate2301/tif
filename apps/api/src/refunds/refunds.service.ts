import { Injectable } from '@nestjs/common';

export interface IRefundService {
  role: 'merchant' | 'superuser';
  refund_payment(): Promise<void>;
  delete_refund_tx(): Promise<void>;
  update_refund_tx(): Promise<void>;
  get_refund_tx(): Promise<void>;
}

@Injectable()
export class RefundsService implements IRefundService {
  role: 'merchant' | 'superuser' = 'merchant';
  refund_payment(): Promise<void> {
    throw new Error('Method not implemented.');
  }
  delete_refund_tx(): Promise<void> {
    throw new Error('Method not implemented.');
  }
  update_refund_tx(): Promise<void> {
    throw new Error('Method not implemented.');
  }
  get_refund_tx(): Promise<void> {
    throw new Error('Method not implemented.');
  }
}

@Injectable()
export class SuperRefundsService implements IRefundService {
  role: 'merchant' | 'superuser' = 'superuser';
  refund_payment(): Promise<void> {
    throw new Error('Method not implemented.');
  }
  delete_refund_tx(): Promise<void> {
    throw new Error('Method not implemented.');
  }
  update_refund_tx(): Promise<void> {
    throw new Error('Method not implemented.');
  }
  get_refund_tx(): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
