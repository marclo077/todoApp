import { Todo } from './todo.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TodoRepository } from './todo.repository';
import { CrearTareaDto } from './dto/crear-tarea.dto';

@Injectable()
export class TodoService {

    constructor(
        @InjectRepository(TodoRepository)
        private readonly _todoRepository: TodoRepository
    ){}

    /** Metodos */

    async getAll(): Promise<Todo[]> {
        const tasks: Todo[] = await this._todoRepository.find({ order: { "id": "DESC"}});
        return tasks;
    }

    async getOne(id: number) {
        const task: Todo = await this._todoRepository.findOne(id);
        return task;
    }

    async create(crearTareaDto: CrearTareaDto): Promise<Todo>{
        const task: Todo = await this._todoRepository.save(crearTareaDto);
        return task;
    }

    async delete(id: number): Promise<void>{
        const task: Todo = await this._todoRepository.findOne(id);
        if(!task){
            throw new NotFoundException('La Tarea no existe');
        }
        await this._todoRepository.delete(id);
    }

    async update(id: number, tarea: Todo){
        const task: Todo = await this._todoRepository.findOne(id);
        if(!task){
            throw new NotFoundException('La Tarea no existe');
        }
        return await this._todoRepository.update(id, tarea);
    }

    async changeStatus(id: number): Promise<void>{
        const task: Todo = await this._todoRepository.findOne(id);
        if(!task){
            throw new NotFoundException('La Tarea no existe');
        }
        await this._todoRepository.update(id, { estado: !task.estado });
    }

}
