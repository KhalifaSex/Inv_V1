import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { Categoria } from './categoria.entity';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';

// Prefijo de ruta: /categorias
@Controller('categorias')
export class CategoriasController {
  constructor(private readonly categoriasService: CategoriasService) {}

  @Get()
  // GET /categorias -> devuelve todas las categorías
  findAll(): Promise<Categoria[]> {
    return this.categoriasService.findAll();
  }

  @Get(':id')
  // GET /categorias/:id  devuelve una categoría por su ID
  findOne(@Param('id') id: string): Promise<Categoria | null> {
    return this.categoriasService.findOne(+id); // +id convierte el string en número
  }

  @Post()
  // POST /categorias  crea una nueva categoría
  create(@Body() createCategoriaDto: CreateCategoriaDto) {
    return this.categoriasService.create(createCategoriaDto);
  }

  @Put(':id')
  // PUT /categorias/:id  actualiza una categoría existente
  update(
    @Param('id') id: string,
    @Body() updateCategoriaDto: UpdateCategoriaDto,
  ): Promise<Categoria> {
    return this.categoriasService.update(+id, updateCategoriaDto);
  }

  @Delete(':id')
  // DELETE /categorias/:id  elimina una categoría por ID
  remove(@Param('id') id: string): Promise<void> {
    return this.categoriasService.remove(+id);
  }
}
