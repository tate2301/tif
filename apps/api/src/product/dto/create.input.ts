import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateProductInput {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  price: number;

  @IsNumber()
  quantity: number;

  @IsString()
  @IsOptional()
  image: string;
}
