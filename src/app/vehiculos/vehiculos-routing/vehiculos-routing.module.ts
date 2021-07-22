import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VehiculoDetailComponent } from '../vehiculo-detail/vehiculo-detail.component';
import { VehiculoListComponent } from '../vehiculo-list/vehiculo-list.component';

const vehiculossRoutes: Routes = [
  { path: 'vehiculo-list',  component: VehiculoListComponent, data: { animation: 'vehiculoss' } },
  { path: 'vehiculo-detail/:id', redirectTo: '/vehiculo-detail/:id' },
  { path: 'vehiculo-detail/:id', component: VehiculoDetailComponent, data: { animation: 'vehiculos' } }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(vehiculossRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class VehiculosRoutingModule { }