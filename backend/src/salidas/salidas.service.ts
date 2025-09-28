import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Salida } from './salida.entity';

@Injectable()
export class SalidasService {
  constructor(
    @InjectRepository(Salida)
    private salidasRepo: Repository<Salida>,
  ) {}

  findAll(): Promise<Salida[]> {
    return this.salidasRepo.find();
  }

  findOne(id: number): Promise<Salida | null> {
    return this.salidasRepo.findOneBy({ id });
  }

  async create(data: Partial<Salida>): Promise<Salida> {
  const nueva = this.salidasRepo.create(data);
  return this.salidasRepo.save(nueva);
   }   

  async update(id: number, salida: Partial<Salida>): Promise<Salida> {
    const existente = await this.salidasRepo.findOneBy({ id });
    if (!existente) {
      throw new Error(`Salida con id ${id} no encontrada`);
    }
    const actualizado = this.salidasRepo.merge(existente, salida);
    return await this.salidasRepo.save(actualizado);
  }

  async remove(id: number): Promise<void> {
    await this.salidasRepo.delete(id);
  }
}
