import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioListService {
  constructor(private httpClient: HttpClient) { }
  
  public listUsuarios(){
    return this.httpClient.get(`http://localhost:8080/carrest/usuario/items?offset=10&limit=10`);
  }
}
