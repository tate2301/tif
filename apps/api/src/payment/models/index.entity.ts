import { CURRENCIES, PAYMENT_METHODS, PAYMENT_MODE } from 'src/common/enum';
import { Column } from 'typeorm';

export class DTestableEntity {
  @Column()
  livemode?: boolean = false;
}

export class DBasePaymentEntity extends DTestableEntity {
  @Column()
  merchant_id: string;

  @Column()
  created: Date;

  @Column()
  mode: PAYMENT_MODE;

  @Column()
  submit_type: 'pay' | 'donate' | 'book';

  @Column('simple-array')
  payment_methods: Array<PAYMENT_METHODS>;

  @Column('simple-array')
  currencies: Array<CURRENCIES>;
}

export class DCollectingAddressEntity {
  @Column()
  address: string;

  @Column()
  address_line_2: string;

  @Column()
  city: string;

  @Column()
  country: string;
}
