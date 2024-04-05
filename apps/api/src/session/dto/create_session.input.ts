import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator';
import { CHECKOUT_TYPE, GOODS_TYPE, PAYMENT_METHODS } from 'src/common/enum';
import { Product } from 'src/product/models/product.entity';

type DiscountCode = { code: string; amount: number };

export class CreateSessionInput {
  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @IsOptional()
  @IsString()
  notes?: string;

  @IsArray()
  payment_methods: PAYMENT_METHODS[] = [PAYMENT_METHODS.EcoCash];

  @IsString()
  @IsEnum(GOODS_TYPE)
  goods_sold_type: GOODS_TYPE = GOODS_TYPE.PHYSICAL;

  @IsString()
  @IsEnum(CHECKOUT_TYPE)
  checkout_type: CHECKOUT_TYPE = CHECKOUT_TYPE.PAY;

  @IsArray()
  items: {
    product: string;
    quantity: number;
  }[] = [];

  @IsOptional()
  @IsString()
  reference_id?: string;

  @IsString()
  return_url: string;

  @IsString()
  success_url: string;

  @IsOptional()
  @IsNumber()
  expires_at?: number = Date.now() + 3 * 24 * 60 * 60;
}
