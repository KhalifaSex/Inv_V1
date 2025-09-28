import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriasModule } from './categorias/categorias.module';
import { RolesModule } from './roles/roles.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { RepuestosModule } from './repuestos/repuestos.module';
import { SalidasModule } from './salidas/salida.module';

@Module({
  imports: [
    // Carga variables de entorno desde un archivo .env y las hace globales
    ConfigModule.forRoot({ isGlobal: true }),

    // Configuración de la conexión a la base de datos usando TypeORM
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],        // Para poder inyectar ConfigService
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',             // Usamos postgre sql en este caso Supabase
        url: config.get<string>('DATABASE_URL'), //Lee la url de conexión desde el .env
        autoLoadEntities: true,       // Detecta automáticamente todas las entidades sin declararlas aquí
        synchronize: false,           // no sincronizar en producción evita cambios automáticos en la BD(es fundamental)
        ssl: { rejectUnauthorized: false }, // Requerido porque Supabase pide conexión segura SSL
      }),
    }),

    // Importamos los módulos de la app cada uno con su CRUD
    SalidasModule,
    RepuestosModule,
    UsuariosModule,
    CategoriasModule,
    RolesModule,
  ],
})
export class AppModule {}
