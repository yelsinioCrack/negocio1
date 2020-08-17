import { VerUsuarioComponent } from './componentes/administracion/ver-usuario/ver-usuario.component';
import { VerRecetaComponent } from './componentes/administracion/ver-receta/ver-receta.component';
import { VerPublicacionComponent } from './componentes/administracion/ver-publicacion/ver-publicacion.component';
import { VerProductoComponent } from './componentes/administracion/ver-producto/ver-producto.component';
import { SolicitudesComponent } from './componentes/administracion/solicitudes/solicitudes.component';
import { SRechazadasComponent } from './componentes/administracion/s-rechazadas/s-rechazadas.component';
import { SAtendidasComponent } from './componentes/administracion/s-atendidas/s-atendidas.component';
import { CrearUsuariosComponent } from './componentes/administracion/crear-usuarios/crear-usuarios.component';
import { CrearRecetaComponent } from './componentes/administracion/crear-receta/crear-receta.component';
import { CrearProductoComponent } from './componentes/administracion/crear-producto/crear-producto.component';
import { ConfiguracionComponent } from './componentes/administracion/configuracion/configuracion.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { PortalComponent } from './componentes/portal/portal.component';
import { BlogComponent } from './componentes/blog/blog.component';
import { AdministracionComponent } from './componentes/administracion/administracion.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '', 
    component: PrincipalComponent
  },


  // ADMINISTRACION
  {
    path: 'admin',
    component: AdministracionComponent,
    children: [
      {
        path: 'configuracion',
        component:ConfiguracionComponent,

      },
      {
        path: 'crear-producto',
        component:CrearProductoComponent,
      },

      {
        path: 'crear-receta',
        component:CrearRecetaComponent,
      },
      {
        path: 'crear-usuario',
        component:CrearUsuariosComponent,
      },
      {
        path: 'solicitudes-atendidas',
        component:SAtendidasComponent,
      },
      {
        path: 'solicitudes-rechazadas',
        component:SRechazadasComponent,
      },
      {
        path: 'solicitudes',
        component:SolicitudesComponent,
      },

      {
        path: 'ver-producto',
        component:VerProductoComponent,
      },
      {
        path: 'ver-publicacion',
        component:VerPublicacionComponent,
      },
      {
        path: 'ver-receta',
        component:VerRecetaComponent,
      },
      {
        path: 'ver-usuario',
        component:VerUsuarioComponent,
      },
    ]
  },



  // BLOG
  {
    path: 'blog',
    component: BlogComponent,
  },


  // PORTAL
  {
    path: 'portal',
    component: PortalComponent,
  },



  // USUARIO
  {
    path: 'usuario',
    component: UsuarioComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
