import { Options } from '@nestjs/common/decorators';
import { IsEmail, IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator';
import { UserInterface } from '../interfaces/user.interface';

export class PostUsersDto implements UserInterface {
  @IsNotEmpty({message: 'No puede ser un campo vacio'})
  @IsNumber()
  @IsOptional()
  uuid: number;

  @IsNotEmpty({message: 'No puede ser un campo vacio'})
  @IsString({message: 'No es un string'})
  nombre: string;

  @IsNotEmpty({message: 'No puede ser un campo vacio'})
  @IsString({message: 'No es un string'})
  @IsOptional()
  apellido?: string;

  @IsNotEmpty({message: 'No puede ser un campo vacio'})
  @IsEmail()
  mail: string;
}
