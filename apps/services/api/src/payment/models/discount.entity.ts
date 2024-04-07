import { Column, PrimaryColumn } from 'typeorm';

export class Discount {
  @PrimaryColumn()
  id: string;

  @Column()
  code: string;

  @Column()
  name: string;

  @Column()
  type: 'percentage' | 'fixed';

  @Column()
  amount: number;

  @Column()
  expires_at: number;
}
