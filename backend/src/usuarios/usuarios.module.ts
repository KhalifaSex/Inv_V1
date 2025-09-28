import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { Usuario } from './usuario.entity';

// Decorador @Module -> define un módulo de NestJS
// En este caso el módulo de "usuarios" que agrupa entidad, servicio y controlador
@Module({
  // imports -> aquí registramos la entidad "Usuario" en TypeORM
  // Esto permite que el servicio pueda usar el repositorio de Usuario
  imports: [TypeOrmModule.forFeature([Usuario])],

  // providers -> servicios que estarán disponibles en este módulo
  providers: [UsuariosService],

  // controllers -> controladores asociados a este módulo
  controllers: [UsuariosController],
})
export class UsuariosModule {}
