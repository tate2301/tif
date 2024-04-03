import { IsBoolean, IsDate, IsEmail, IsNotEmpty, IsString, IsUUID, isNotEmpty } from "class-validator";

export class RegisterUserInput {
    @IsNotEmpty()
    first_name: string;

    @IsNotEmpty()
    last_name: string;

    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string

    @IsNotEmpty()
    address: string;

    @IsString()
    address_line_2: string;

    @IsNotEmpty()
    @IsString()
    city: string;

    @IsNotEmpty()
    @IsString()
    country: string;

    @IsString()
    profile_picture: string
}