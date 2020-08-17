import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicacionComponent } from './publicacion/publicacion.component';
import { CrearPublicacionComponent } from './crear-publicacion/crear-publicacion.component';



@NgModule({
  declarations: [PublicacionComponent, CrearPublicacionComponent],
  imports: [
    CommonModule
  ]
})
export class PortalModule { }
