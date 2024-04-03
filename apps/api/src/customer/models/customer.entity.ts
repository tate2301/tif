import { UUID } from "crypto";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Customer {
    @PrimaryColumn("uuid")
    id: UUID;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    name: string;

    @Column()
    address: string;

    @Column()
    city: string;

    @Column()
    state: string;

    @Column()
    zip: string;

    @Column()
    country: string;
}