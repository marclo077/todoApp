import { Todo } from './todo.entity';
import { Repository, EntityRepository } from 'typeorm';

@EntityRepository(Todo)
export class TodoRepository extends Repository<Todo>{

}