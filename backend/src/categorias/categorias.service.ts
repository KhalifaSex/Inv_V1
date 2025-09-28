import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categoria } from './categoria.entity';

// Servicio que maneja la lógica de negocio de categorías
@Injectable()
export class CategoriasService {
  constructor(
    // Inyectamos el repositorio de la entidad Categoria
    @InjectRepository(Categoria)
    private categoriasRepo: Repository<Categoria>,
  ) {}

  // Devuelve todas las categorías
  findAll(): Promise<Categoria[]> {
    return this.categoriasRepo.find();
  }

  // Busca una categoría por su ID
  findOne(id: number): Promise<Categoria | null> {
    return this.categoriasRepo.findOneBy({ id });
  }

  // Crea una nueva categoría
  async create(categoria: Partial<Categoria>): Promise<Categoria> {
    if (!categoria.nombre) {
      throw new Error('El campo "nombre" es obligatorio');
    }

    // Creamos una nueva instancia asegurándonos de solo guardar "nombre"
    const nueva = this.categoriasRepo.create({
      nombre: categoria.nombre,
    });

    return this.categoriasRepo.save(nueva);
  }

  // Actualiza una categoría existente
  async update(id: number, categoria: Partial<Categoria>): Promise<Categoria> {
    try {
      const existente = await this.categoriasRepo.findOneBy({ id });
      if (!existente) {
        throw new Error(`Categoría con id ${id} no encontrada`);
      }
      // Merge combina datos nuevos con los existentes
      const actualizado = this.categoriasRepo.merge(existente, categoria);
      return await this.categoriasRepo.save(actualizado);
    } catch (error) {
      console.error('❌ Error en update:', error);
      throw error;
    }
  }

  // Elimina una categoría por su ID
  async remove(id: number): Promise<void> {
    await this.categoriasRepo.delete(id);
  }
}
