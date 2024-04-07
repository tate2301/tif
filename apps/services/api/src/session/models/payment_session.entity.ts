import { CHECKOUT_TYPE } from 'src/common/enum';
import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { RevokeReason } from '../session.service';
import { Product } from 'src/product/models/product.entity';
import { PaymentSessionProducts } from './payment_session_products.entity';

@Entity()
export class PaymentSession {
  @PrimaryColumn()
  id: string;

  @Column()
  sessionId: string;

  @Column()
  amount: number;

  @Column()
  merchantId: string;

  @Column()
  status: 'paid' | 'unpaid' | 'no_payment_required' | 'revoked';

  @Column()
  cancel_reason: RevokeReason;

  @Column()
  timestamp: Date;

  @Column()
  notes: string;

  @Column()
  goods_sold_type: string;

  @Column()
  checkout_type: CHECKOUT_TYPE;

  @Column()
  reference_id: string;

  @Column()
  return_url: string;

  @Column()
  success_url: string;

  @Column()
  subtotal: number;

  @Column()
  total: number;

  @Column()
  custom_text: string;

  @Column()
  expires_at: number;

  @Column()
  updated_at: number;

  @Column()
  livemode: boolean;

  @Column('simple-array')
  products: string;

  @Column('simple-array')
  payment_methods: string[];

  @Column('simple-array')
  flags: string[];

  @Column('simple-array')
  discount_codes: string[];

  @Column('simple-array')
  shipping_methods: string[];
}
