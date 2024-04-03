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

  @IsOptional()
  @IsString()
  reference_id?: string;

  @IsString()
  @IsUrl()
  return_url: string;

  @IsString()
  @IsUrl()
  success_url: string;

  @IsOptional()
  @IsNumber()
  expires_at?: number = Date.now() + 3 * 24 * 60 * 60;
}
