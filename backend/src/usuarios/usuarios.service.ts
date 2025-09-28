import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';

// Decorador @Injectable -> indica que esta clase puede ser inyectada
// como un servicio dentro de otros módulos/clases de NestJS
@Injectable()
export class UsuariosService {
  // Inyectamos el repositorio de la entidad Usuario,
  // lo que nos permite interactuar con la tabla "usuarios" en la base de datos
  constructor(
    @InjectRepository(Usuario)
    private usuariosRepo: Repository<Usuario>,
  ) {}

  // Devuelve todos los usuarios
  findAll(): Promise<Usuario[]> {
    return this.usuariosRepo.find();
  }

  // Busca un usuario por su ID
  findOne(id: string): Promise<Usuario | null> {
    return this.usuariosRepo.findOne({ where: { id } });
  }

  // Crea un nuevo usuario
  create(usuario: Partial<Usuario>): Promise<Usuario> {
    // "create" prepara una nueva entidad a partir del objeto recibido
    const nuevo = this.usuariosRepo.create(usuario);
    // "save" guarda la entidad en la base de datos
    return this.usuariosRepo.save(nuevo);
  }

  // Actualiza un usuario existente
  async update(id: string, usuario: Partial<Usuario>): Promise<Usuario> {
    // Verificamos si el usuario existe
    const existente = await this.usuariosRepo.findOne({ where: { id } });
    if (!existente) {
      throw new Error(`Usuario con id ${id} no encontrado`);
    }
    // "merge" combina los datos nuevos con los existentes
    const actualizado = this.usuariosRepo.merge(existente, usuario);
    // Guardamos los cambios en la BD
    return await this.usuariosRepo.save(actualizado);
  }

  // Elimina un usuario por su ID
  async remove(id: string): Promise<void> {
    await this.usuariosRepo.delete(id);
  }
}
