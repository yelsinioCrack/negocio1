import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecetasComponent } from './recetas/recetas.component';
import { FiltroComponent } from './filtro/filtro.component';
import { VerRecetaComponent } from './ver-receta/ver-receta.component';



@NgModule({
  declarations: [RecetasComponent, FiltroComponent, VerRecetaComponent],
  imports: [
    CommonModule
  ]
})
export class BlogModule { }
