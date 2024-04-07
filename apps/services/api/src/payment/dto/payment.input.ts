import {
  IsArray,
  IsEnum,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';
import { PaymentStatus } from '../models/payment.entity';

export class UpdatePaymentInput {
  @IsOptional()
  @IsString()
  @IsEnum(PaymentStatus)
  status: PaymentStatus;

  @IsOptional()
  @IsString()
  customerId: string;

  @IsOptional()
  @IsString()
  notes: string;

  @IsOptional()
  @IsString()
  receipt_email: string;

  @IsOptional()
  @IsObject()
  shipping: {
    address: string;
    city: string;
    country: string;
  };

  @IsArray()
  charges: string[];
}
