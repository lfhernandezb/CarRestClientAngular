import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Usuario } from '../usuario';
import { Observable } from 'rxjs';
import { AlertService } from '../../_alert';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario-detail.component.html',
  styleUrls: ['./usuario-detail.component.css']
})
export class UsuarioDetailComponent implements OnInit {
  usuario: any;
  options: any;
  success: boolean;
  errorMessage: string;

  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService
    ) { }

  ngOnInit(): void {
    // console.log('OnInit')
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

    /*
    this.usuarioService.getUsuario(1).subscribe((data)=>{
      console.log(data);
      this.usuario = data;
      console.log(this.usuario);
    });
    */
  }

}
