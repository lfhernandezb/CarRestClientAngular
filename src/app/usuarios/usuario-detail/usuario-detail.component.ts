import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { VehiculoService } from '../../vehiculos/vehiculo.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Usuario } from '../usuario';
import { PaginationConfig } from '../../pagination-config';
import { Observable } from 'rxjs';
import { AlertService } from '../../_alert';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario-detail.component.html',
  styleUrls: ['./usuario-detail.component.css']
})
export class UsuarioDetailComponent implements OnInit {
  usuario: any;
  collection: any;
  options: any;
  success: boolean;
  errorMessage: string;
  pagConfig: PaginationConfig;
  criteria: string;

  constructor(
    private usuarioService: UsuarioService,
    private vehiculoService: VehiculoService, 
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService
    ) { }

  ngOnInit(): void {
    // console.log('OnInit')
    this.pagConfig = new PaginationConfig();
    // para mensajes de error
    this.options = {
      autoclose: false,
      keepAfterRouteChange: false
    };
    // se recibe como parametro el id de usuario desde usuario-list
    let id = this.route.snapshot.paramMap.get('id');
    
    this.usuario = this.usuarioService.getUsuario(id).
      subscribe(
        (data)=>{
          //console.log(data);
          this.usuario = data;
        },
        (error) => {
          console.log('oops', error);
          //this.success = false;
          //this.errorMessage = error;
          //console.log("triggering error");
          this.alertService.error(this.errorMessage, this.options);
        }
        
    );

    this.pagConfig.currentPage = +this.route.snapshot.paramMap.get('currentPage');
    this.pagConfig.numberOfPages = +this.route.snapshot.paramMap.get('numberOfPages');
    this.pagConfig.totalItems = +this.route.snapshot.paramMap.get('totalItems');
    this.criteria = this.route.snapshot.paramMap.get('criteria');

    /*
    this.usuarioService.getUsuario(1).subscribe((data)=>{
      console.log(data);
      this.usuario = data;
      console.log(this.usuario);
    });
    */
    
    // obtengo los vehiculos del usuario
    this.vehiculoService.
      listVehiculosUsuario(0, 10, +id).
      subscribe(
        (data)=>{
          //console.log(data);
          this.collection = data;
        },
        (error) => {
          console.log('oops', error);
          this.success = false;
          this.errorMessage = error;
          console.log("triggering error");
          this.alertService.error(this.errorMessage, this.options);
        }
    );

  }

  gotoUsuarioList() {
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/usuario-list', {
      currentPage: this.pagConfig.currentPage, 
      numberOfPages: this.pagConfig.numberOfPages, 
      totalItems: this.pagConfig.totalItems,
      criteria: this.criteria}]);
  }
}
