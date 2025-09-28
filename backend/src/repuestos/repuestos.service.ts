import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindManyOptions, FindOneOptions } from 'typeorm';
import { Repuesto } from './repuesto.entity';

@Injectable()
export class RepuestosService {
  constructor(
    @InjectRepository(Repuesto)
    private repuestosRepo: Repository<Repuesto>,
  ) {}

  // Acepta opciones opcionales
  findAll(options?: FindManyOptions<Repuesto>): Promise<Repuesto[]> {
    return this.repuestosRepo.find(options);
  }

  findOne(options: FindOneOptions<Repuesto>): Promise<Repuesto | null> {
    return this.repuestosRepo.findOne(options);
  }

  create(data: Partial<Repuesto>): Promise<Repuesto> {
    const nuevo = this.repuestosRepo.create(data);
    return this.repuestosRepo.save(nuevo);
  }

  async update(id: number, data: Partial<Repuesto>): Promise<Repuesto> {
    const existente = await this.repuestosRepo.findOne({ where: { id } });
    if (!existente) throw new Error(`Repuesto con id ${id} no encontrado`);
    const actualizado = this.repuestosRepo.merge(existente, data);
    return this.repuestosRepo.save(actualizado);
  }

  async remove(id: number): Promise<void> {
    await this.repuestosRepo.delete(id);
  }
}
