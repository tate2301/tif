import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { DBasePaymentEntity } from './index.entity';

@Entity()
export default class DPayment extends DBasePaymentEntity {
  @PrimaryGeneratedColumn()
  id: number;

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
}
