import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Rol } from '../roles/roles.entity';

// Decorador Entity indica que esta clase es una entidad de TypeORM
// y se mapeará a la tabla "usuarios" en la base de datos.
@Entity('usuarios')
export class Usuario {
  // Columna id clave primaria generada automáticamente en formato UUID
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // Columna email texto único para cada usuario , no se puede repetir
  @Column({ type: 'varchar', unique: true })
  email: string;

  // Columna password texto donde se almacena la contraseña 
  @Column({ type: 'varchar' })
  password: string;

  // Columna nombre texto opcional nullable verdadero permite que quede vacío
  @Column({ type: 'varchar', nullable: true })
  nombre: string;

  // Relación muchos a uno con la entidad Rol
  // Cada usuario tiene un solo rol, pero un rol puede pertenecer a muchos usuarios
  // El eager: true  hace que siempre se cargue el rol automáticamente al consultar un usuario
  @ManyToOne(() => Rol, { eager: true })
  @JoinColumn({ name: 'rol_id' }) // Se crea la columna "rol_id" en la tabla usuarios 
  rol: Rol;
}
