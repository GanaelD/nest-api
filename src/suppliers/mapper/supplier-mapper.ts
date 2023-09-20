import {SupplierEntity} from "../entities/supplier.entity";
import {CreateSupplierDto} from "../dto/create-supplier.dto";


export class SupplierMapper {
    public static entityToDto(entity: SupplierEntity): CreateSupplierDto {
        return new CreateSupplierDto(entity.id, entity.name, entity.address);
    }

    public static dtoToEntity(dto: CreateSupplierDto): SupplierEntity {
        return new SupplierEntity(dto.id, dto.name, dto.address);
    }
}