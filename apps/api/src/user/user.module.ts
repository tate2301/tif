import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DMerchant } from "./models/merchant.entity";
import { DUser } from "./models/user.entity";
import { MerchantService } from "./service/merchant.service";
import { UsersService } from "./service/user.service";
import { UsersController } from "./user.controller";

@Module({
    imports: [TypeOrmModule.forFeature([DMerchant, DUser])],
    providers: [MerchantService, UsersService],
    controllers: [UsersController],
    exports: [MerchantService, UsersService]

})
export class UsersModule {}