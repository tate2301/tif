import { DCollectingAddressEntity } from 'src/payment/models/index.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DUser extends DCollectingAddressEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  uuid: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  created: Date;

  @Column()
  email: string;

  @Column()
  is_active: boolean;
}
