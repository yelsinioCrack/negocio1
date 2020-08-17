import { AppRoutingModule } from './../../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { VerProductoComponent } from './ver-producto/ver-producto.component';
import { VerUsuarioComponent } from './ver-usuario/ver-usuario.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { SAtendidasComponent } from './s-atendidas/s-atendidas.component';
import { SRechazadasComponent } from './s-rechazadas/s-rechazadas.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { CrearRecetaComponent } from './crear-receta/crear-receta.component';
import { VerRecetaComponent } from './ver-receta/ver-receta.component';
import { VerPublicacionComponent } from './ver-publicacion/ver-publicacion.component';
import { CrearUsuariosComponent } from './crear-usuarios/crear-usuarios.component';
import { NavBarAdminComponent } from './nav-bar-admin/nav-bar-admin.component';



@NgModule({
  declarations: [CrearProductoComponent, VerProductoComponent, VerUsuarioComponent, SolicitudesComponent, SAtendidasComponent, SRechazadasComponent, ConfiguracionComponent, CrearRecetaComponent, VerRecetaComponent, VerPublicacionComponent, CrearUsuariosComponent, NavBarAdminComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    NavBarAdminComponent,
    SolicitudesComponent
  ]
})
export class AdministracionModule { }
