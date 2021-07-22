import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { AlertModule } from '../_alert';

import { VehiculoListComponent } from './vehiculo-list/vehiculo-list.component';
import { VehiculoDetailComponent } from './vehiculo-detail/vehiculo-detail.component';
import { VehiculosRoutingModule } from './vehiculos-routing/vehiculos-routing.module';


@NgModule({
  declarations: [VehiculoListComponent, VehiculoDetailComponent],
  imports: [
    CommonModule,
    VehiculosRoutingModule,
    NgxPaginationModule,
    AlertModule
  ]
})
export class VehiculosModule { }
