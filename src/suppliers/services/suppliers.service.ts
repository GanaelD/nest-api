import { Injectable } from '@nestjs/common';
import { CreateSupplierDto } from '../dto/create-supplier.dto';
import { UpdateSupplierDto } from '../dto/update-supplier.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {SupplierEntity} from "../entities/supplier.entity";
import {Repository} from "typeorm";

@Injectable()
export class SuppliersService {

  constructor(
      @InjectRepository(SupplierEntity)
      private supplierRepository: Repository<SupplierEntity>
  ) {}

  findAll(): Promise<SupplierEntity[]> {
    return this.supplierRepository.find();
  }

  findOne(id: bigint): Promise<SupplierEntity> {
    return this.supplierRepository.findOneBy({id});
  }

  findFirstByName(name: string): Promise<SupplierEntity> {
    return this.supplierRepository.findOneBy({name});
  }

  async save(supplier: UpdateSupplierDto): Promise<SupplierEntity> {
    return this.supplierRepository.save(supplier);
  }

  async remove(id: bigint): Promise<void> {
    await this.supplierRepository.delete(id as unknown as number);
  }
}
