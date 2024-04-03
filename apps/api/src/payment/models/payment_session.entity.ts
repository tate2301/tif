import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { DTestableEntity } from "./index.entity";

@Entity()
export class PaymentSession extends DTestableEntity {
    @PrimaryGeneratedColumn()
    id: string

    @Column("string")
    url: string

    @Column()
    merchantId: number
}