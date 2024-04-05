import {
  Column,
  Entity,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { DBasePaymentEntity } from './index.entity';
import { ApiKey } from 'src/api-key/models/api_key.entity';

export enum PaymentStatus {
  paid = 'paid',
  unpaid = 'unpaid',
  no_payment_requirement = 'no_payment_requirement',
  processing = 'processing',
  cancelled = 'cancelled',
  voided = 'voided',
}

@Entity()
export default class Payment extends DBasePaymentEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  amount: number;

  @Column()
  status: PaymentStatus;

  @Column()
  merchant_id: string;

  @Column()
  customer_id: string;

  @Column()
  notes: string;

  @Column()
  receipt_email: string;

  @Column('simple-json')
  shipping: {
    address: string;
    city: string;
    country: string;
  };

  @Column('simple-array')
  charges: string[];

  @OneToOne(() => ApiKey, (apiKey) => apiKey.id)
  api_key: string;
}
