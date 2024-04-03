import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class ApiKey {
  @PrimaryColumn()
  id: string;

  @Column()
  secret: string;

  @Column()
  name: string;

  @Column()
  is_test: boolean = true;

  @Column()
  environment: string;

  @Column()
  user_id: string;

  @Column('datetime')
  created_at?: Date = new Date();

  @Column({ nullable: true })
  updated_at?: Date;

  @Column({ nullable: true })
  deleted_at?: Date;
}
