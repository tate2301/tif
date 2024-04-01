import { Column, Entity } from 'typeorm';

@Entity()
export class DBearer {
  @Column()
  api_key: string;

  @Column()
  merchant_id: string;

  @Column()
  env: 'production' | 'staging' | 'development';

  @Column()
  is_active?: boolean;
}
