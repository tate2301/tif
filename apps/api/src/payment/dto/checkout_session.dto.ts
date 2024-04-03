import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsEnum,
  IsArray,
  IsOptional,
} from 'class-validator';
import { CURRENCIES, PAYMENT_METHODS, PAYMENT_MODE } from 'src/common/enum';
import { Discount } from '../models/discount.entity';

export class InitiateCheckoutDto {
  @IsNotEmpty()
  @IsNumber()
  readonly merchant: string;

  @IsNotEmpty()
  //   @IsUrl()
  readonly success_url: string;

  @IsNotEmpty()
  //   @IsUrl()
  readonly cancel_url: string;

  @IsNotEmpty()
  @IsNumber()
  readonly amount: number;

  @IsNotEmpty()
  @IsNumber()
  readonly ui: 'hosted';

  @IsNotEmpty()
  @IsString()
  readonly currency: CURRENCIES;

  @IsOptional()
  @IsArray()
  discount_codes: string[] = [];

  @IsNotEmpty()
  @IsEnum(PAYMENT_METHODS)
  readonly payment_method: PAYMENT_METHODS;

  @IsNotEmpty()
  @IsEnum(PAYMENT_MODE)
  readonly mode: PAYMENT_MODE;
}
