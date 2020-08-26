import { NgModule } from '@angular/core';
import { CompletadosPipe } from './completados.pipe';
import { ContadorPipe } from './contador.pipe';

@NgModule({
  declarations: [CompletadosPipe, ContadorPipe],
  exports: [CompletadosPipe, ContadorPipe],
})
export class PipesModule { }
