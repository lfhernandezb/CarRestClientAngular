import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { UsuarioComponent } from './usuario/usuario.component';
//import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { PageNotFoundComponent }    from './page-not-found/page-not-found.component';

const routes: Routes = [
  /*{path:'usuario', component: UsuarioComponent},*/
  /*{path:'usuario-list', component: UsuarioListComponent},*/
  { path: '',   redirectTo: '/usuario-list', pathMatch: 'full' },
  /*{ path: '**', component: PageNotFoundComponent }*/
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        enableTracing: false
      }      
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
