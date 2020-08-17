import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from './perfil/perfil.component';
import { RecetaFavoritaComponent } from './receta-favorita/receta-favorita.component';
import { PublicacionRecienteComponent } from './publicacion-reciente/publicacion-reciente.component';
import { ComprasComponent } from './compras/compras.component';
import { ListasComponent } from './listas/listas.component';



@NgModule({
  declarations: [PerfilComponent, RecetaFavoritaComponent, PublicacionRecienteComponent, ComprasComponent, ListasComponent],
  imports: [
    CommonModule
  ]
})
export class UsuarioModule { }
