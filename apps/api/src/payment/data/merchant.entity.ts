import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
// based on stripe merchant object
export class DMerchant {
  @PrimaryGeneratedColumn()
  id: number;
}
