import { IsString, IsInt, IsNotEmpty } from 'class-validator';

export class CreateRepuestoDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  descripcion: string;

  @IsInt()
  cantidad: number;

  @IsInt()
  categoria_id: number;
}
