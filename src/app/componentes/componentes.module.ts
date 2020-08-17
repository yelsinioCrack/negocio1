import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './../app-routing.module';
import { AdministracionModule } from './administracion/administracion.module';
import { PrincipalModule } from './principal/principal.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalComponent } from './principal/principal.component';
import { AdministracionComponent } from './administracion/administracion.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { BlogComponent } from './blog/blog.component';
import { PortalComponent } from './portal/portal.component';
import { HomePageComponent } from './home-page/home-page.component';



@NgModule({
  declarations: [
    PrincipalComponent, 
    AdministracionComponent, 
    UsuarioComponent, 
    BlogComponent, 
    PortalComponent, 
    HomePageComponent],
  imports: [
    CommonModule,
    PrincipalModule,
    AdministracionModule,
    AppRoutingModule,
    BrowserModule
    
  ],
  exports: [
    PrincipalComponent,
    AdministracionComponent
  ]

})
export class ComponentesModule { }
