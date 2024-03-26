import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class DPayment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;

  @Column()
  currency: 'USD' | 'ZWL';

  @Column('simple-array')
  payment_methods: string;

  @Column()
  status: 'paid' | 'upaid' | 'no_payment_required' | 'processing' | 'canceled';

  @Column()
  timestamp: Date;

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

  @Column()
  livemode: boolean;

  @Column('simple-json')
  shipping: {
    address: string;
    city: string;
    country: string;
  };

  @Column('simple-array')
  charges: string[];
}
