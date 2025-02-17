import { Injectable } from '@angular/core';
import {environment} from '../../../environments/Environment';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ResponseApi} from '../Model/ApiResponse';
import {Login} from '../Model/login';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private urlApi:string =environment.endpoint+"user/";

  constructor(private http:HttpClient) { }

  IniciarSesion(request:Login):Observable<ResponseApi>{
    return this.http.post<ResponseApi>(`${this.urlApi}login`,request)
  }
}
