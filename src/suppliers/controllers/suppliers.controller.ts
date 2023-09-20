import {Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Put} from '@nestjs/common';
import { SuppliersService } from '../services/suppliers.service';
import { CreateSupplierDto } from '../dto/create-supplier.dto';
import { UpdateSupplierDto } from '../dto/update-supplier.dto';
import {SupplierEntity} from "../entities/supplier.entity";

@Controller('service/supplier')
export class SuppliersController {
  constructor(private readonly suppliersService: SuppliersService) {}

  @Get()
  async findAll(): Promise<SupplierEntity[]> {
    return await this.suppliersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: bigint): Promise<SupplierEntity> {
    return await this.suppliersService.findOne(id);
  }

  @Get('name/:name')
  async findOneByName(@Param('name') name: string): Promise<SupplierEntity> {
    return await this.suppliersService.findFirstByName(name);
  }

  @Post()
  async createSupplier(@Body() createSupplierDto: CreateSupplierDto) {
    return await this.suppliersService.save(createSupplierDto);
  }

  @Put(':id')
  async update(@Param('id', ParseIntPipe) id: bigint, @Body() updateSupplierDto: UpdateSupplierDto) {
    return await this.suppliersService.save(updateSupplierDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: bigint) {
    return await this.suppliersService.remove(id);
  }
}
