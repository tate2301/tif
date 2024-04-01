import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { DCollectingAddressEntity as DAddressEntity } from '../../payment/models/index.entity';

@Entity()
// based on stripe merchant object
export class DMerchant extends DAddressEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  merchantName: string;

  @Column()
  email: string;

  @Column()
  user: number
}
