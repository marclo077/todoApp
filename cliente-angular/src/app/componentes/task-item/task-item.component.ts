import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../componentes/task-list/task';
import { TodoService } from '../../servicios/todo.service';
import { NgbModalOptions, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() tarea: Task;
  @Output() listar: EventEmitter<Task[]>;
  task: Task;

  modalOptions: NgbModalOptions;
  constructor(private _todoService: TodoService, private _modalService: NgbModal) {
    this.listar = new EventEmitter();
    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop',
      keyboard: false
    };
  }

  ngOnInit(): void {
  }

  cambiarEstado(idTarea: number){
    this._todoService.changeStatus(idTarea).subscribe( () => {
      this.listar.emit();
    })
  }

  getTarea(id: number){
    this._todoService.getTarea(id).subscribe( response => {
      this.task = response;
    })
  }

  eliminar(idTarea: number){
    this._todoService.deleteTarea(idTarea).subscribe( () => {
      this.listar.emit();
    })
  }

  modificar(){
    this._todoService.editTarea(this.task).subscribe( () => {
      this._modalService.dismissAll();
      this.listar.emit();
    })
  }

  fopenModal(id: number, contenido: any ){
    this.getTarea(id);
    this._modalService.open(contenido, this.modalOptions);
  }
}
