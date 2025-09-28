import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { Rol } from './roles.entity';

// Este módulo agrupa todo lo relacionado a "Roles":
//    Entidad
//    Servicio
//    Controlador
@Module({
  // Importamos la entidad Rol para poder usarla con TypeORM.
  imports: [TypeOrmModule.forFeature([Rol])],

  // Registramos el servicio como proveedor.
  providers: [RolesService],

  // Registramos el controlador que expone los endpoints HTTP.
  controllers: [RolesController],
})
export class RolesModule {}
