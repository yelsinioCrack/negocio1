import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoComponent } from './producto/producto.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ListaComponent } from './lista/lista.component';
import { BtnListaComponent } from './btn-lista/btn-lista.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    ProductoComponent, 
    CategoriaComponent, 
    ListaComponent, 
    BtnListaComponent, 
    NavbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CategoriaComponent,
    ProductoComponent,
    NavbarComponent,
    BtnListaComponent,
    ListaComponent
  ]
})
export class PrincipalModule { }
