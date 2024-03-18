import { IsNotEmpty, IsString } from 'class-validator';

export class RefundDto {
  @IsNotEmpty()
  @IsString()
  readonly reason: string;
}
