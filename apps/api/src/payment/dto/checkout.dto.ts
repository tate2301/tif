import { IsNotEmpty, IsString, IsNumber, IsEnum, IsUrl } from 'class-validator';
import {
  CURRENCIES,
  PAYMENT_METHODS,
  PAYMENT_MODE,
} from '../payments.interface';

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
  readonly ui: 'hosted' | 'embedded';

  @IsNotEmpty()
  @IsString()
  readonly currency: CURRENCIES;

  @IsNotEmpty()
  @IsEnum(PAYMENT_METHODS)
  readonly payment_method: PAYMENT_METHODS;

  @IsNotEmpty()
  @IsEnum(PAYMENT_MODE)
  readonly mode: PAYMENT_MODE;
}
