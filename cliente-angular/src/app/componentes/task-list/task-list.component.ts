import { Component, OnInit } from '@angular/core';
import { Task } from './task';
import { TodoService } from './../../servicios/todo.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tareas: Task[];
  estado: boolean;
  tarea: string = '';

  constructor(private _todoService: TodoService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this._todoService.getTareas().subscribe( response => {
      this.tareas = response;
    })
  }

  agregar(){
    this._todoService.addTarea(this.tarea).subscribe( () => {
      this.listar();
      this.tarea = '';
    })
  }

}
