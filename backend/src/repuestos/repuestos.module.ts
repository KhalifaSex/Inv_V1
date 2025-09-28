import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Repuesto } from './repuesto.entity';
import { RepuestosService } from './repuestos.service';
import { RepuestosController } from './repuestos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Repuesto])], // 👈 Se registra la entidad en TypeORM
  providers: [RepuestosService], // 👈 Lógica de negocio
  controllers: [RepuestosController], // 👈 Endpoints HTTP
})
export class RepuestosModule {}
