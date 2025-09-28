import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Salida } from './salida.entity';
import { SalidasService } from './salidas.service';
import { SalidasController } from './salidas.controller';

// El módulo Salidas agrupa la entidad, servicio y controlador de salidas
@Module({
  // Registramos la entidad "Salida" en TypeORM
  imports: [TypeOrmModule.forFeature([Salida])],
  // Registramos el servicio de salidas
  providers: [SalidasService],
  // Registramos el controlador de salidas
  controllers: [SalidasController],
})
export class SalidasModule {}
