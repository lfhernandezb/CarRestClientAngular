import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario';
import { AlertService } from '../../_alert';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {
  config: any;
  options: any;
  collection: any;
  criteria: string;
  success: boolean;
  errorMessage: string;

  constructor(
    private usuarioService: UsuarioService, 
    private alertService: AlertService,
    private route: ActivatedRoute
  ) { }
  
  ngOnInit(): void {
    // para paginacion
    this.config = {
      currentPage: 0,
      itemsPerPage: 10,
      numberOfPages: 0,
      totalItems: 0,
      autoHide: true
    };
    // para mensajes de error
    this.options = {
      autoclose: false,
      keepAfterRouteChange: false
    };

  }

  pageChange(newPage: number) {
    this.config.currentPage = newPage;
    // eliminamos mensaje de error si estuviera desplegado
    this.alertService.clear();

    this.usuarioService.
      listUsuarios(this.config.itemsPerPage * (newPage - 1), this.config.itemsPerPage, this.criteria).
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
    /*
    if (this.criteria) {
      this.usuarioListService.
        listUsuarios(this.config.itemsPerPage * (newPage - 1), this.config.itemsPerPage, this.criteria).
        subscribe(
          (data)=>{
            //console.log(data);
            this.collection = data;
          },
          (error) => {
            console.log('oops', error);
            this.success = false;
            this.errorMessage = error;
          }
      );
    }
    else {
      this.usuarioListService.
        listUsuarios(this.config.itemsPerPage * (newPage - 1), this.config.itemsPerPage).
        subscribe(
          (data)=>{
          //console.log(data);
          this.collection = data;
          // console.log(this.usuarioList);
          },
          (error) => {
            console.log('oops', error);
            this.success = false;
            this.errorMessage = error;
          }
        );

    }
    */
    /*
    if (!this.success) {
      console.log("triggering error");
      this.alertService.error(this.errorMessage, this.options);
    }
    */
  }
  
  vehiculos(usuario: Usuario): void {
  }

  delete(idUsuario: number): void {
  }
  
  onSearch(criteria: string) {
    //alert("You Clicked Me!");
    // console.log("onSearch")
    this.success = true;
    this.criteria = criteria;
    this.config.numberOfPages = 0;
    this.config.totalItems = 0;
    this.config.currentPage = 0;
    this.collection = null;

    // eliminamos mensaje de error si estuviera desplegado
    this.alertService.clear();


    this.usuarioService.
      countUsuarios(this.criteria).
      subscribe(
        (data)=>{
          console.log("count: "+data);
          this.config.totalItems = data;
          //console.log(this.usuarioList);

          if (this.config.totalItems > 0) {
            let paginationData = Number(this.config.totalItems / this.config.itemsPerPage);
            this.config.numberOfPages = Number(paginationData.toFixed());

            if (paginationData > this.config.numberOfPages) {
              this.config.numberOfPages += 1;
            }
          }
          else {
            this.alertService.info('No records found');
          }

          this.pageChange(1);
            /*
            this.config.currentPage = 1;
            this.usuarioListService.
              listUsuarios(0, 10, this.criteria).
              subscribe(
                (data)=>{
                //console.log(data);
                this.collection = data;
                //console.log(this.usuarioList);
                },
                (error) => {
                  console.log('oops', error);
                  this.success = false;
                  this.errorMessage = error;
                  this.alertService.error(this.errorMessage);
                }
              );
              */
          
        },
        (error) => {
          console.log('oops', error);
          this.success = false;
          this.errorMessage = error;
          this.alertService.error(this.errorMessage);
        }
      );




    /*
    if (this.criteria) {
      this.usuarioListService.
        countUsuarios(this.criteria).
        subscribe(
          (data)=>{
          //console.log(data);
          this.config.totalItems = data;
          //console.log(this.usuarioList);
          },
          (error) => {
            console.log('oops', error);
            this.success = false;
            this.errorMessage = error;
            this.alertService.error(this.errorMessage);
          }
        );
    }
    else {
      this.usuarioListService.
        countUsuarios().
        subscribe(
          (data)=>{
          console.log(data);
          this.config.totalItems = data;
          //console.log(this.usuarioList);
          },
          (error) => {
            console.log('oops', error);
            this.success = false;
            console.log("success 1: " + this.success)
            this.errorMessage = error;
            this.alertService.error(this.errorMessage);
          }
        );
    }

    if (this.config.totalItems > 0) {
      let paginationData = Number(this.config.totalItems / this.config.itemsPerPage);
      this.config.numberOfPages = Number(paginationData.toFixed());

      if (paginationData > this.config.numberOfPages) {
        this.config.numberOfPages += 1;
      }

      if (this.criteria) {
        this.usuarioListService.
          listUsuarios(0, 10, this.criteria).
          subscribe(
            (data)=>{
            //console.log(data);
            this.collection = data;
            //console.log(this.usuarioList);
            },
            (error) => {
              console.log('oops', error);
              this.success = false;
              this.errorMessage = error;
              this.alertService.error(this.errorMessage);
            }
          );
      }
      else {
        this.usuarioListService.
          listUsuarios(0, 10).
          subscribe(
            (data)=>{
            console.log(data);
            this.collection = data;
            //console.log(this.usuarioList);
            console.log(this.config)
            },
            (error) => {
              console.log('oops', error);
              this.success = false;
              console.log("success 2: " + this.success)
              this.errorMessage = error;
              this.alertService.error(this.errorMessage);
            }
          );
      }

    }
    */
    /*
    console.log("success 3: " + this.success)
    if (!this.success) {
      console.log("triggering error");
      this.alertService.error(this.errorMessage);
    }
    */
  }
  
  detalleUsuario(idUsuario: number) {

  }
}
