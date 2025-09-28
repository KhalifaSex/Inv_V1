import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Salida } from './salida.entity';

// Servicio que contiene la lógica de negocio para manejar las salidas
@Injectable()
export class SalidasService {
  constructor(
    // Inyectamos el repositorio de la entidad Salida
    @InjectRepository(Salida)
    private salidasRepo: Repository<Salida>,
  ) {}

  // Devuelve todas las salidas
  findAll(): Promise<Salida[]> {
    return this.salidasRepo.find();
  }

  // Busca una salida por su ID
  findOne(id: number): Promise<Salida | null> {
    return this.salidasRepo.findOneBy({ id });
  }

  // Crea una nueva salida
  async create(data: Partial<Salida>): Promise<Salida> {
    // Prepara el objeto como entidad
    const nueva = this.salidasRepo.create(data);
    // Lo guarda en la base de datos
    return this.salidasRepo.save(nueva);
  }

  // Actualiza una salida existente
  async update(id: number, salida: Partial<Salida>): Promise<Salida> {
    // Busca la salida en la BD
    const existente = await this.salidasRepo.findOneBy({ id });
    if (!existente) {
      throw new Error(`Salida con id ${id} no encontrada`);
    }
    // Combina los datos nuevos con los existentes
    const actualizado = this.salidasRepo.merge(existente, salida);
    // Guarda los cambios en la BD
    return await this.salidasRepo.save(actualizado);
  }

  // Elimina una salida por ID
  async remove(id: number): Promise<void> {
    await this.salidasRepo.delete(id);
  }
}
