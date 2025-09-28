import { IsInt, IsUUID, IsString, IsNotEmpty } from 'class-validator';

export class CreateSalidaDto {
  @IsInt()
  repuesto_id: number;

  @IsUUID()
  usuario_id: string;

  @IsString()
  @IsNotEmpty()
  tipo: string; // 'venta' | 'uso_tecnico'

  @IsInt()
  cantidad: number;
}
