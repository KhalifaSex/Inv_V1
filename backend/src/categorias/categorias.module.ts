import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria } from './categoria.entity';
import { CategoriasService } from './categorias.service';
import { CategoriasController } from './categorias.controller';

// El módulo Categorías agrupa entidad, servicio y controlador
@Module({
  // Registramos la entidad en TypeORM
  imports: [TypeOrmModule.forFeature([Categoria])],
  // Registramos el controlador
  controllers: [CategoriasController],
  // Registramos el servicio
  providers: [CategoriasService],
  // Exportamos TypeOrmModule para que otros módulos puedan usar esta entidad
  exports: [TypeOrmModule],
})
export class CategoriasModule {}
