import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class DBearer {
  @PrimaryColumn()
  api_key: string;

  @Column()
  merchant_id: string;

  @Column()
  env: 'production' | 'staging' | 'development';

  @Column()
  is_active?: boolean;
}
