import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindManyOptions, FindOneOptions } from 'typeorm';
import { Repuesto } from './repuesto.entity';

@Injectable()
export class RepuestosService {
  constructor(
    @InjectRepository(Repuesto)
    private repuestosRepo: Repository<Repuesto>, // 👈 Repositorio de TypeORM para interactuar con la BD
  ) {}

  // Obtiene todos los repuestos (con o sin opciones extra como relaciones o filtros)
  findAll(options?: FindManyOptions<Repuesto>): Promise<Repuesto[]> {
    return this.repuestosRepo.find(options);
  }

  // Obtiene un repuesto según opciones (id, relaciones, etc.)
  findOne(options: FindOneOptions<Repuesto>): Promise<Repuesto | null> {
    return this.repuestosRepo.findOne(options);
  }

  // Crea un nuevo repuesto
  create(data: Partial<Repuesto>): Promise<Repuesto> {
    const nuevo = this.repuestosRepo.create(data);
    return this.repuestosRepo.save(nuevo);
  }

  // Actualiza un repuesto existente
  async update(id: number, data: Partial<Repuesto>): Promise<Repuesto> {
    const existente = await this.repuestosRepo.findOne({ where: { id } });
    if (!existente) throw new Error(`Repuesto con id ${id} no encontrado`);
    const actualizado = this.repuestosRepo.merge(existente, data);
    return this.repuestosRepo.save(actualizado);
  }

  // Elimina un repuesto por id
  async remove(id: number): Promise<void> {
    await this.repuestosRepo.delete(id);
  }
}
