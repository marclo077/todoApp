import { Todo } from './../todo/todo.entity';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { type } from 'os';

@Entity('usuarios')
export class Usuario extends BaseEntity {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: 'varchar', unique: true, nullable: false})
    usuario: string;

    @Column({ type: 'varchar', nullable: false})
    email: string;

    @Column({ type: 'varchar', nullable: false})
    password: string;

    @Column({ type: 'varchar', default: 'ACTIVO', nullable: false, length: 8})
    estado: string;

    @CreateDateColumn({type: 'timestamp', name: 'created_at'})
    createdAt: Date;

    @UpdateDateColumn({type: 'timestamp', name: 'updated_at'})
    updatedAt: Date;

    //Relacion con la entidad Todo
    
    
}