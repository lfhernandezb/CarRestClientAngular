import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from './layout/layout.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { ErrorInterceptorProvider } from './http.interceptor';
import { AlertModule } from './_alert';
//import {enableProdMode} from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    UsuarioListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutModule,
    NgxPaginationModule,
    AlertModule
  ],
  providers: [ErrorInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
