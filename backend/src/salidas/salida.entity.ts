import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Repuesto } from '../repuestos/repuesto.entity';

@Entity('salidas')
export class Salida {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'repuesto_id' })
  repuestoId: number;

  @ManyToOne(() => Repuesto, r => r.salidas)
  @JoinColumn({ name: 'repuesto_id' }) // coincide con la columna real en la BD
  repuesto: Repuesto;

  @Column({ type: 'varchar', length: 50 })
  tipo: 'venta' | 'uso_tecnico';

  @Column({ type: 'int' })
  cantidad: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha: Date;
}
