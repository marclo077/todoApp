import { Task } from './../componentes/task-list/task';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contador'
})
export class ContadorPipe implements PipeTransform {

  transform(tareas: Task[], estado: boolean = null): number {
    if( estado !== null)
      return tareas.filter(tarea => tarea.estado === estado).length;
    return tareas.length
  }

}
