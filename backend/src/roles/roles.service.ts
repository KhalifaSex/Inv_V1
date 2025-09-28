import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rol } from './roles.entity';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Rol)
    private rolesRepo: Repository<Rol>,
  ) {}

  findAll(): Promise<Rol[]> {
    return this.rolesRepo.find();
  }

  findOne(id: number): Promise<Rol | null> {
    return this.rolesRepo.findOneBy({ id });
  }

  create(rol: Partial<Rol>): Promise<Rol> {
    const nuevo = this.rolesRepo.create(rol);
    return this.rolesRepo.save(nuevo);
  }

  async update(id: number, rol: Partial<Rol>): Promise<Rol> {
    const existente = await this.rolesRepo.findOneBy({ id });
    if (!existente) throw new Error(`Rol con id ${id} no encontrado`);
    const actualizado = this.rolesRepo.merge(existente, rol);
    return await this.rolesRepo.save(actualizado);
  }

  async remove(id: number): Promise<void> {
    await this.rolesRepo.delete(id);
  }
}
