import {Column, Entity, PrimaryColumn} from "typeorm";

interface Supplier {
    id: bigint,
    name: string,
    address: string
}

@Entity()
export class SupplierEntity implements Supplier {
    @PrimaryColumn()
    id: bigint;

    @Column()
    name: string;

    @Column()
    address: string;

    constructor(id: bigint, name: string, address: string) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
}
