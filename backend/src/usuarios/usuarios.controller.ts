import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Usuario } from './usuario.entity';

// Decorador Controller define el prefijo de la ruta para este módulo.
// Todas las rutas empezarán con usuarios
@Controller('usuarios')
export class UsuariosController {
  // Inyectamos el servicio de usuarios para acceder a la lógica de negocio
  constructor(private readonly usuariosService: UsuariosService) {}

  @Get()
  // GET /usuarios  devuelve todos los usuarios
  findAll(): Promise<Usuario[]> {
    return this.usuariosService.findAll();
  }

  @Get(':id')
  // GET /usuarios/:id  devuelve un usuario específico según su ID
  findOne(@Param('id') id: string): Promise<Usuario | null> {
    return this.usuariosService.findOne(id);
  }

  @Post()
  // POST /usuarios crea un nuevo usuario con los datos enviados en el body
  create(@Body() body: Partial<Usuario>): Promise<Usuario> {
    return this.usuariosService.create(body);
  }

  @Put(':id')
  // PUT /usuarios/:id actualiza el usuario con el ID indicado
  update(@Param('id') id: string, @Body() body: Partial<Usuario>): Promise<Usuario> {
    return this.usuariosService.update(id, body);
  }

  @Delete(':id')
  // DELETE /usuarios/:id  elimina el usuario con el ID indicado
  remove(@Param('id') id: string): Promise<void> {
    return this.usuariosService.remove(id);
  }
}
