import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class PaymentSessionProducts {
  @PrimaryColumn()
  id: string;

  @Column()
  product: string;
}
