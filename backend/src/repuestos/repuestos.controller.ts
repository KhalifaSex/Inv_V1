import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { RepuestosService } from './repuestos.service';
import { Repuesto } from './repuesto.entity';

@Controller('repuestos')
export class RepuestosController {
  constructor(private readonly repuestosService: RepuestosService) {}

  // GET /repuestos
  @Get()
  async findAll(): Promise<any[]> {
    const repuestos = await this.repuestosService.findAll({
      relations: ['categoria', 'salidas'],
    });

    return repuestos.map(r => ({
      id: r.id,
      nombre: r.nombre,
      descripcion: r.descripcion,
      cantidad: r.cantidad,
      creado_en: r.creado_en,
      categoria_nombre: r.categoria?.nombre || null,
      salidas: r.salidas?.map(s => ({
        tipo: s.tipo,
        cantidad: s.cantidad,
        fecha: s.fecha,
      })) || [],
    }));
  }

  // GET /repuestos/:id
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<any> {
    const r = await this.repuestosService.findOne({
      where: { id },
      relations: ['categoria', 'salidas'],
    });
    if (!r) return null;

    return {
      id: r.id,
      nombre: r.nombre,
      descripcion: r.descripcion,
      cantidad: r.cantidad,
      creado_en: r.creado_en,
      categoria_nombre: r.categoria?.nombre || null,
      salidas: r.salidas?.map(s => ({
        tipo: s.tipo,
        cantidad: s.cantidad,
        fecha: s.fecha,
      })) || [],
    };
  }

  // POST /repuestos
  @Post()
  create(@Body() data: Partial<Repuesto>): Promise<Repuesto> {
    return this.repuestosService.create(data);
  }

  // PUT /repuestos/:id
  @Put(':id')
  update(@Param('id') id: number, @Body() data: Partial<Repuesto>): Promise<Repuesto> {
    return this.repuestosService.update(id, data);
  }

  // DELETE /repuestos/:id
  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.repuestosService.remove(id);
  }
}
