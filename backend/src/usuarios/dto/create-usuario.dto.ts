import { IsString, IsEmail, IsUUID, IsInt, IsNotEmpty } from 'class-validator';

export class CreateUsuarioDto {
  @IsUUID()
  id: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsInt()
  rol_id: number;
}
