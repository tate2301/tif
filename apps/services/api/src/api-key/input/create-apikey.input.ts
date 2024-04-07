import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAPIKeyInput {
  @IsString()
  @IsNotEmpty()
  name: string;
}
