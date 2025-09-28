import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { RolesService } from './roles.service';
import { Rol } from './roles.entity';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Get()
  findAll(): Promise<Rol[]> {
    return this.rolesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Rol | null> {
    return this.rolesService.findOne(id);
  }

  @Post()
  create(@Body() rol: Partial<Rol>): Promise<Rol> {
    return this.rolesService.create(rol);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() rol: Partial<Rol>): Promise<Rol> {
    return this.rolesService.update(id, rol);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.rolesService.remove(id);
  }
}
