import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

// Decorador Entity  representa la tabla "categorias" en la base de datos
@Entity('categorias')
export class Categoria {
  // Columna id clave primaria autoincremental
  @PrimaryGeneratedColumn()
  id: number;

  // Columna nombre texto obligatorio para identificar la categoría
  @Column()
  nombre: string;
}
