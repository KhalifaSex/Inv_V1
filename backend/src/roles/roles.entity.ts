import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

//  Definición de la entidad "Rol". 
//    Cada instancia representa un registro en la tabla "roles".
@Entity('roles')
export class Rol {
  // Llave primaria autoincremental.
  @PrimaryGeneratedColumn()
  id: number;

  // Nombre del rol (ej: "admin", "tecnico", "usuario").
  @Column()
  nombre: string;
}
