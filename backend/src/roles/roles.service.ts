import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rol } from './roles.entity';

@Injectable()
// Este servicio contiene la lógica de negocio y operaciones sobre la entidad Rol.
export class RolesService {
  constructor(
    // Inyectamos el repositorio de la entidad Rol para interactuar con la BD.
    @InjectRepository(Rol)
    private rolesRepo: Repository<Rol>,
  ) {}

  // Obtener todos los roles
  findAll(): Promise<Rol[]> {
    return this.rolesRepo.find();
  }

  // Buscar un rol por id
  findOne(id: number): Promise<Rol | null> {
    return this.rolesRepo.findOneBy({ id });
  }

  // Crear un rol nuevo
  create(rol: Partial<Rol>): Promise<Rol> {
    const nuevo = this.rolesRepo.create(rol); // crea instancia en memoria
    return this.rolesRepo.save(nuevo);        // guarda en la BD
  }

  // Actualizar un rol existente
  async update(id: number, rol: Partial<Rol>): Promise<Rol> {
    const existente = await this.rolesRepo.findOneBy({ id });
    if (!existente) throw new Error(`Rol con id ${id} no encontrado`);

    const actualizado = this.rolesRepo.merge(existente, rol); // mezcla cambios
    return await this.rolesRepo.save(actualizado);            // guarda en BD
  }

  // Eliminar un rol
  async remove(id: number): Promise<void> {
    await this.rolesRepo.delete(id);
  }
}
