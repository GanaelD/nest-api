export class CreateSupplierDto {
    id: bigint;
    name: string;
    address: string;

    constructor(id: bigint, name: string, address: string) {
    }
}
