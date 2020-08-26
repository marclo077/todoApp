import { IsNotEmpty } from 'class-validator';

export class CrearTareaDto {

    @IsNotEmpty()
    tarea: string;

}