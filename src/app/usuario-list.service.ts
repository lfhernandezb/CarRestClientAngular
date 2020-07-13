import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

import {  throwError } from 'rxjs';
import {  catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioListService {

  private REST_API_SERVER = 'http://localhost:8080/carrest/usuario';

  constructor(private httpClient: HttpClient) { }
  
  public listUsuarios(offset: number, limit: number, criteria?: string){
    if (criteria) {
      return this.httpClient.
        get(this.REST_API_SERVER+'/items?offset='+offset+'&limit='+limit+'&criteria='+criteria);
    }
    else {
      return this.httpClient.
        get(this.REST_API_SERVER+'/items?offset='+offset+'&limit='+limit);
    }
  }

  public countUsuarios(criteria?: string){
    if (criteria) {
      return this.httpClient.
        get(this.REST_API_SERVER+'/count?criteria='+criteria);
    }
    else {
      return this.httpClient.
        get(this.REST_API_SERVER+'/count');
    }
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
