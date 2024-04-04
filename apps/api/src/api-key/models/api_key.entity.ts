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

  @Column()
  created_at?: number = new Date().getTime() / 1000;

  @Column({ nullable: true })
  updated_at?: number = new Date().getTime() / 1000;

  @Column({ nullable: true })
  deleted_at?: number = null;
}
