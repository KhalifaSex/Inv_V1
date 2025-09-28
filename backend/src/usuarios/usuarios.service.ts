import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private usuariosRepo: Repository<Usuario>,
  ) {}

  findAll(): Promise<Usuario[]> {
    return this.usuariosRepo.find();
  }

  findOne(id: string): Promise<Usuario | null> {
    return this.usuariosRepo.findOne({ where: { id } });
  }

  create(usuario: Partial<Usuario>): Promise<Usuario> {
    const nuevo = this.usuariosRepo.create(usuario);
    return this.usuariosRepo.save(nuevo);
  }

  async update(id: string, usuario: Partial<Usuario>): Promise<Usuario> {
    const existente = await this.usuariosRepo.findOne({ where: { id } });
    if (!existente) {
      throw new Error(`Usuario con id ${id} no encontrado`);
    }
    const actualizado = this.usuariosRepo.merge(existente, usuario);
    return await this.usuariosRepo.save(actualizado);
  }

  async remove(id: string): Promise<void> {
    await this.usuariosRepo.delete(id);
  }
}
