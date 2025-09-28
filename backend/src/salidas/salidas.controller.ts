import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { SalidasService } from './salidas.service';
import { Salida } from './salida.entity';

// Prefijo de ruta: /salidas
@Controller('salidas')
export class SalidasController {
  constructor(private readonly salidasService: SalidasService) {}

  @Get()
  // GET /salidas -> devuelve todas las salidas
  findAll(): Promise<Salida[]> {
    return this.salidasService.findAll();
  }

  @Get(':id')
  // GET /salidas/:id -> devuelve una salida específica por su ID
  findOne(@Param('id') id: number): Promise<Salida | null> {
    return this.salidasService.findOne(id);
  }

  @Post()
  // POST /salidas -> crea una nueva salida
  create(@Body() salida: Partial<Salida>): Promise<Salida> {
    return this.salidasService.create(salida);
  }

  @Put(':id')
  // PUT /salidas/:id -> actualiza una salida existente
  update(@Param('id') id: number, @Body() salida: Partial<Salida>): Promise<Salida> {
    return this.salidasService.update(id, salida);
  }

  @Delete(':id')
  // DELETE /salidas/:id -> elimina una salida por ID
  remove(@Param('id') id: number): Promise<void> {
    return this.salidasService.remove(id);
  }
}
