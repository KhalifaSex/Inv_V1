import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { SalidasService } from './salidas.service';
import { Salida } from './salida.entity';

@Controller('salidas')
export class SalidasController {
  constructor(private readonly salidasService: SalidasService) {}

  @Get()
  findAll(): Promise<Salida[]> {
    return this.salidasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Salida | null> {
    return this.salidasService.findOne(id);
  }

  @Post()
  create(@Body() salida: Partial<Salida>): Promise<Salida> {
    return this.salidasService.create(salida);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() salida: Partial<Salida>): Promise<Salida> {
    return this.salidasService.update(id, salida);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.salidasService.remove(id);
  }
}
