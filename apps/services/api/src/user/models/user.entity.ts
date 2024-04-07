import { ApiKey } from 'src/api-key/models/api_key.entity';
import { DCollectingAddressEntity } from 'src/payment/models/index.entity';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity()
export class Merchant extends DCollectingAddressEntity {
  @PrimaryColumn()
  id?: string;

  @Column()
  uuid: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  merchant_name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  is_active: boolean = false;

  @Column()
  profile_picture: string =
    'https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg';

  @Column({ default: null, type: 'datetime' })
  created_at?: number = new Date().getTime();

  @Column({ default: null, type: 'datetime' })
  updated_at?: number = new Date().getTime();

  @OneToMany((type) => ApiKey, (apiKey) => apiKey.user_id)
  apiKeys: ApiKey[];
}
