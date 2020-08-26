import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { PipesModule } from './../pipes/pipes.module';
import { HomeComponent } from './home/home.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskItemComponent } from './task-item/task-item.component';

@NgModule({
  declarations: [
    HomeComponent,
    TaskListComponent,
    TaskItemComponent,
  ],
  imports: [
    CommonModule,
    PipesModule,
    FormsModule
  ],
})
export class ComponentesModule { }
