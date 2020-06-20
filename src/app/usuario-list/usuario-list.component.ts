import { Component, OnInit } from '@angular/core';
import { UsuarioListService } from '../usuario-list.service';
import { Usuario } from '../usuario/usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {
  usuarioList;

  constructor(private usuarioListService: UsuarioListService) { }

  ngOnInit(): void {
    this.usuarioListService.listUsuarios().subscribe((data)=>{
      console.log(data);
      this.usuarioList = data;
      /* console.log(this.usuarioList); */
    });  }

  vehiculos(usuario: Usuario): void {
  }

  delete(idUsuario: number): void {
  }

  search(searchTerm: string) {
  }

}
