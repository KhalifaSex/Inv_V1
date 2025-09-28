import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Salida } from './salida.entity';
import { SalidasService } from './salidas.service';
import { SalidasController } from './salidas.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Salida])],
  providers: [SalidasService],
  controllers: [SalidasController],
})
export class SalidasModule {}
