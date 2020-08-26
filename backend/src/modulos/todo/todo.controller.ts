import { TodoService } from './todo.service';
import { Controller, Get, Post, Body, Delete, Param, ParseIntPipe, Put, Patch, ParseBoolPipe, UsePipes, ValidationPipe } from '@nestjs/common';
import { Todo } from './todo.entity';
import { CrearTareaDto } from './dto/crear-tarea.dto';

@Controller('tasks')
export class TodoController {

    constructor(private readonly _todoService: TodoService){}

    @Get()
    async getTareas(): Promise<Todo[]> {
        const tasks = await this._todoService.getAll();
        return tasks;
    }

    @Get(':id')
    async getTarea(@Param('id', ParseIntPipe) id: number): Promise<Todo> {
        const task = await this._todoService.getOne(id);
        return task;
    }

    @Post()
    @UsePipes(ValidationPipe)
    async storeTarea(@Body() crearTareaDto: CrearTareaDto): Promise<Todo> {
        const task: Todo = await this._todoService.create(crearTareaDto);
        return task;
    }

    @Put(':id') //@Param('id', ParseIntPipe) saca la propiedad id le objeto que llegue para parsearlo a entero
    async changeStatus(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return await this._todoService.changeStatus(id);
    }

    @Patch(':id')
    async updateTask(@Param('id', ParseIntPipe) id: number, @Body() tarea: Todo){
        return await this._todoService.update(id, tarea);
    }

    @Delete(':id') //@Param('id', ParseIntPipe) saca la propiedad id le objeto que llegue para parsearlo a entero
    async deleteTask(@Param('id', ParseIntPipe) id: number){
        return await this._todoService.delete(id);
    }
}
