import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DCharge {
  @PrimaryGeneratedColumn()
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

  @Column()
  livemode: boolean;
}
