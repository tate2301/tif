import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DCustomer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  email: string;

  @Column()
  mobile: string;

  @Column()
  address: string;

  @Column()
  city: string;

  @Column()
  country: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @Column()
  is_active: boolean;

  @Column()
  is_deleted: boolean;
}
