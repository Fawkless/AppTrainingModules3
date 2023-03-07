import { v4 as uuid } from 'uuid';

export interface UserInterface {
  uuid: number;
  nombre: string;
  apellido?: string;
  mail: string;
}
