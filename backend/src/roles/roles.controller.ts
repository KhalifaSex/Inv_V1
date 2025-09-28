import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { RolesService } from './roles.service';
import { Rol } from './roles.entity';

// Este controlador expone los endpoints HTTP para la entidad "Rol".
//  se encarga de recibir las solicitudes del cliente y delegarlas al servicio.
@Controller('roles')
export class RolesController {
  // Inyectamos el servicio de roles mediante el constructor.
  constructor(private readonly rolesService: RolesService) {}

  // GET /roles
  // Retorna la lista de todos los roles disponibles.
  @Get()
  findAll(): Promise<Rol[]> {
    return this.rolesService.findAll();
  }

  // GET /roles/:id
  // Retorna un rol específico según su id.
  @Get(':id')
  findOne(@Param('id') id: number): Promise<Rol | null> {
    return this.rolesService.findOne(id);
  }

  // POST /roles
  // Crea un nuevo rol en la base de datos.
  @Post()
  create(@Body() rol: Partial<Rol>): Promise<Rol> {
    return this.rolesService.create(rol);
  }

  // PUT /roles/:id
  // Actualiza un rol existente según su id.
  @Put(':id')
  update(@Param('id') id: number, @Body() rol: Partial<Rol>): Promise<Rol> {
    return this.rolesService.update(id, rol);
  }

  // DELETE /roles/:id
  // Elimina un rol de la base de datos.
  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.rolesService.remove(id);
  }
}
