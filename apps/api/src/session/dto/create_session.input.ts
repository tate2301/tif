import { IsArray, IsEnum, IsNotEmpty, IsNumber, IsString, IsUrl } from "class-validator";
import { PAYMENT_METHODS } from "src/payment/payments.interface";

enum GOODS_TYPE {
    "service",
    "software",
    "physical_goods",

}

enum CHECKOUT_TYPE {
    "payment", "subscription", "donation"
}

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