import { IsNotEmpty, IsString } from 'class-validator';

export class VoidDto {
  @IsNotEmpty()
  @IsString()
  readonly reason: string;
}
