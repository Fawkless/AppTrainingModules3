import { IsNotEmpty, IsString, IsOptional } from 'class-validator';
import { UserInterface } from '../interfaces/user.interface';

export class PatchUsersDto implements UserInterface {
  @IsNotEmpty({message: 'No puede ser un campo vacio'})
  @IsString({message: 'No es un string'})
  @IsOptional()
  uuid: number;

  @IsNotEmpty({message: 'No puede ser un campo vacio'})
  @IsString({message: 'No es un string'})
  @IsOptional()
  nombre: string;

  @IsNotEmpty({message: 'No puede ser un campo vacio'})
  @IsString({message: 'No es un string'})
  @IsOptional()
  apellido?: string;

  @IsNotEmpty({message: 'No puede ser un campo vacio'})
  @IsString({message: 'No es un string'})
  @IsOptional()
  mail: string;
}
