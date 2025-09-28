import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Repuesto } from '../repuestos/repuesto.entity';

// Decorador @Entity -> esta clase representa la tabla "salidas"
@Entity('salidas')
export class Salida {
  // Columna "id": clave primaria autoincremental
  @PrimaryGeneratedColumn()
  id: number;

  // Columna que guarda el ID del repuesto relacionado
  @Column({ name: 'repuesto_id' })
  repuestoId: number;

  // Relación muchos-a-uno con la entidad Repuesto
  // Muchas salidas pueden referirse a un mismo repuesto
  @ManyToOne(() => Repuesto, r => r.salidas)
  @JoinColumn({ name: 'repuesto_id' }) // asegura que la FK apunte a la columna real "repuesto_id"
  repuesto: Repuesto;

  // Columna "tipo": restringida a 'venta' o 'uso_tecnico'
  @Column({ name: 'Tipo', type: 'varchar', length: 50 })
  tipo: 'venta' | 'uso_tecnico';

  // Columna "cantidad": cantidad de repuestos que salen
  @Column({ type: 'int' })
  cantidad: number;

  // Columna "fecha": fecha y hora de la salida (por defecto la actual)
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha: Date;
}
