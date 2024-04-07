import { SetMetadata } from '@nestjs/common';

export const PaymentCheck = (...checks: Array<'voided' | 'already_paid'>) =>
  SetMetadata('payment_checks', checks);
