import {
  Column,
  Entity,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { DBasePaymentEntity } from './index.entity';
import { ApiKey } from 'src/api-key/models/api_key.entity';

@Entity()
export default class Payment extends DBasePaymentEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  amount: number;

  @Column()
  status: 'paid' | 'upaid' | 'no_payment_required' | 'processing' | 'canceled';

  @Column()
  merchantId: string;

  @Column()
  customerId: string;

  @Column()
  paymentId: string;

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
