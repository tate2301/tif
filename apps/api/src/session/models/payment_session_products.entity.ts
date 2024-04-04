import { Product } from 'src/product/models/product.entity';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity()
export class PaymentSessionProducts {
  @PrimaryColumn()
  id: string;

  @Column('simple-array')
  @OneToMany(() => Product, (product) => product.id)
  product: string[];
}
