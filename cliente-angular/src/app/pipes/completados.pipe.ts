import { Pipe, PipeTransform } from '@angular/core';
import { Task } from './../componentes/task-list/task';

@Pipe({
  name: 'completados'
})
export class CompletadosPipe implements PipeTransform {

  transform(tareas: Task[], estado: boolean = null): Task[] {
    if( estado !== null)
      return tareas.filter(tarea => tarea.estado === estado);
    return tareas;
  }

}
