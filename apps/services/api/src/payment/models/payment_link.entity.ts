import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { LineItem } from '../payments.interface';
import { DBasePaymentEntity } from './index.entity';

@Entity()
export class DPaymentLink extends DBasePaymentEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  url: string;

  @Column()
  amount: number;

  @Column('array')
  items: LineItem[];

  @Column()
  active: boolean;

  @Column()
  after_completion_url?: string;
}
