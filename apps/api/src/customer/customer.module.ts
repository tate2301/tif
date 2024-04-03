import { Module } from "@nestjs/common";
import { CustomerService } from "./customer.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Customer } from "./models/customer.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Customer])],
    exports: [CustomerService]
})
export class CustomerModule{}