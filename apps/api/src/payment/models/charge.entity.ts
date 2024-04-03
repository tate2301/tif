import {
  Column,
  Entity,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { DBasePaymentEntity } from './index.entity';
import Payment from './payment.entity';

@Entity()
export class Charge extends DBasePaymentEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  merchant_id: string;

  @Column()
  amount: number;

  @Column()
  currency: string;

  @Column()
  customer_id: string;

  @Column()
  description: string;

  @Column('json')
  payment_method: {
    type: string;
    data: {
      [key: string]: string;
    };
  };

  @Column()
  refunded: boolean;

  @Column()
  status: 'paid' | 'processing' | 'failed';

  @Column()
  created: Date;

  @OneToOne(() => Payment, (payment) => payment.id)
  payment: string;
}
