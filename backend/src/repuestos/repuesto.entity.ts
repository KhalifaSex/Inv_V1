import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Categoria } from '../categorias/categoria.entity';
import { Salida } from '../salidas/salida.entity';

@Entity('repuestos')
export class Repuesto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  nombre: string;

  @Column({ type: 'text', nullable: true })
  descripcion: string;

  @Column({ type: 'int', default: 0 })
  cantidad: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  creado_en: Date;

  // Relación con categoría
  @ManyToOne(() => Categoria, { eager: true, nullable: true })
  @JoinColumn({ name: 'categoria_id' })
  categoria: Categoria;

  // Relación con salidas
  @OneToMany(() => Salida, s => s.repuesto)
  salidas: Salida[];
}
