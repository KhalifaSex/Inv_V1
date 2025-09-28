import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categoria } from './categoria.entity';

@Injectable()
export class CategoriasService {
  constructor(
    @InjectRepository(Categoria)
    private categoriasRepo: Repository<Categoria>,
  ) {}

  findAll(): Promise<Categoria[]> {
    return this.categoriasRepo.find();
  }

  findOne(id: number): Promise<Categoria | null> {
    return this.categoriasRepo.findOneBy({ id });
  }

  async create(categoria: Partial<Categoria>): Promise<Categoria> {
  if (!categoria.nombre) {
    throw new Error('El campo "nombre" es obligatorio');
  }

  const nueva = this.categoriasRepo.create({
    nombre: categoria.nombre, // 👈 nos aseguramos de que solo guarde el nombre
  });
  return this.categoriasRepo.save(nueva);
}

  async update(id: number, categoria: Partial<Categoria>): Promise<Categoria> {
  try {
    const existente = await this.categoriasRepo.findOneBy({ id });
    if (!existente) {
      throw new Error(`Categoría con id ${id} no encontrada`);
    }
    const actualizado = this.categoriasRepo.merge(existente, categoria);
    return await this.categoriasRepo.save(actualizado);
  } catch (error) {
    console.error('❌ Error en update:', error);
    throw error;
  }
}


  async remove(id: number): Promise<void> {
    await this.categoriasRepo.delete(id);
  }
}
