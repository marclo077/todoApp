import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UsuarioRepository } from './usuario.repository';

@Module({
    imports: [TypeOrmModule.forFeature([UsuarioRepository])],
})
export class UsuarioModule {}
