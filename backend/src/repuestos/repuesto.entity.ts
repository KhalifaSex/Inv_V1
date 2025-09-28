import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Categoria } from '../categorias/categoria.entity';
import { Salida } from '../salidas/salida.entity';

@Entity('repuestos') // 👈 Nombre de la tabla en la base de datos
export class Repuesto {
  @PrimaryGeneratedColumn()
  id: number; // Identificador único (autoincremental)

  @Column({ type: 'varchar', length: 255 })
  nombre: string; // Nombre del repuesto

  @Column({ type: 'text', nullable: true })
  descripcion: string; // Descripción opcional del repuesto

  @Column({ type: 'int', default: 0 })
  cantidad: number; // Stock disponible

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  creado_en: Date; // Fecha de creación automática

  // Relación N:1 con Categoría
  @ManyToOne(() => Categoria, { eager: true, nullable: true })
  @JoinColumn({ name: 'categoria_id' })
  categoria: Categoria;

  // Relación 1:N con Salidas
  @OneToMany(() => Salida, s => s.repuesto)
  salidas: Salida[];
}
