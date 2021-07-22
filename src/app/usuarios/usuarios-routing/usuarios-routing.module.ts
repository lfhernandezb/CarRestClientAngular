import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioDetailComponent } from '../usuario-detail/usuario-detail.component';
import { UsuarioListComponent } from '../usuario-list/usuario-list.component';

const usuariosRoutes: Routes = [
  { path: 'usuario-list',  component: UsuarioListComponent, data: { animation: 'usuarios' } },
  { path: 'usuario-detail/:id', redirectTo: '/usuario-detail/:id' },
  { path: 'usuario-detail/:id', component: UsuarioDetailComponent, data: { animation: 'usuario' } }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(usuariosRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UsuariosRoutingModule { }
