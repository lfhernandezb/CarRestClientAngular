import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { AlertModule } from '../_alert';

import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioDetailComponent } from './usuario-detail/usuario-detail.component';
import { UsuariosRoutingModule } from './usuarios-routing/usuarios-routing.module';


@NgModule({
  declarations: [
    UsuarioListComponent,
    UsuarioDetailComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    NgxPaginationModule,
    AlertModule
  ]
})
export class UsuariosModule { }
