import { IsArray, IsEnum, IsNotEmpty, IsNumber, IsString, IsUrl } from "class-validator";
import { CHECKOUT_TYPE, GOODS_TYPE, PAYMENT_METHODS } from "src/common/enum";



type DiscountCode = {code: string, amount: number}

export class CreateSessionInput {
    @IsNotEmpty()
    @IsNumber()
    amount: number


    @IsNotEmpty()
    @IsString()
    merchantId: string

    @IsString()
    notes?: string

    @IsArray()
    discount_codes?: DiscountCode[]

    @IsArray()
    payment_methods: PAYMENT_METHODS[]

    @IsString()
    @IsEnum(GOODS_TYPE)
    goods_sold_type: GOODS_TYPE

    @IsString()
    @IsEnum(CHECKOUT_TYPE)
    checkout_type: CHECKOUT_TYPE

    @IsString()
    reference_id?: string

    @IsString()
    @IsUrl()
    return_url: string

    @IsString()
    @IsUrl()
    success_url: string
}