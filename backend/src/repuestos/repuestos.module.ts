import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Repuesto } from './repuesto.entity';
import { RepuestosService } from './repuestos.service';
import { RepuestosController } from './repuestos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Repuesto])],
  providers: [RepuestosService],
  controllers: [RepuestosController],
})
export class RepuestosModule {}
