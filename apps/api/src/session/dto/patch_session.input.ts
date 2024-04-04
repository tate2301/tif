import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator';

export class PatchSessionInput {
  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @IsOptional()
  @IsString()
  notes?: string;

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
