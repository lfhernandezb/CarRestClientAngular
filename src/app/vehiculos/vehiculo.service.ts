import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";

//import {  throwError } from 'rxjs';
//import {  catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Content-Security-Policy': 'default-src http://localhost:8080/;'
  }),
  observe: 'body' as const
};

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  private REST_API_SERVER = 'http://localhost:8080/carrest/vehiculo';

  constructor(private httpClient: HttpClient) { }
  
  public listVehiculosUsuario(offset: number, limit: number, idUsuario: number){
      return this.httpClient.
        get(this.REST_API_SERVER+'/usuario/items?idUsuario='+idUsuario+'&offset='+offset+'&limit='+limit, httpOptions);
  }

  public countUsuarios(criteria?: string){
    if (criteria) {
      return this.httpClient.
        get(this.REST_API_SERVER+'/count?criteria='+criteria, httpOptions);
    }
    else {
      return this.httpClient.
        get(this.REST_API_SERVER+'/count', httpOptions);
    }
  }

  public getUsuario(id) {
    //console.log('getUsuario id: '+id)
    return this.httpClient.
        get(this.REST_API_SERVER+'/'+id);// , httpOptions);
  }

  /*
  handleError(error: ErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof HttpErrorResponse) {
      console.log(error.error);
      console.log(error)
      if (error.error instanceof ErrorEvent) {
        // Client-side errors
        errorMessage = `Error: ${error.error.message}`;
      } else {
        // Server-side errors
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
  */
}
