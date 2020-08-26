import { Injectable } from '@angular/core';
import { Task } from '../componentes/task-list/task';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  ruta = 'http://localhost:3000/api';
  constructor(private _httpClient: HttpClient) { }

  getTareas(){
    return this._httpClient.get<Task[]>(`${this.ruta}/tasks`);
  }

  getTarea(idTarea: number){
    return this._httpClient.get<Task>(`${this.ruta}/tasks/${idTarea}`);
  }

  changeStatus(idTarea: number){
    return this._httpClient.put<Task>(`${this.ruta}/tasks/${idTarea}`, null);
  }

  deleteTarea(idTarea: number){
    return this._httpClient.delete<void>(`${this.ruta}/tasks/${idTarea}`);
  }

  addTarea(tarea: string){
    return this._httpClient.post<Task>(`${this.ruta}/tasks`, {
      tarea: tarea
    });
  }

  editTarea(tarea: Task){
    return this._httpClient.patch<Task>(`${this.ruta}/tasks/${tarea.id}`, tarea);
  }
}
