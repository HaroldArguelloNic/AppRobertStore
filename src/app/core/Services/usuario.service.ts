import { Injectable } from '@angular/core';
import {environment} from '../../../environments/Environment';
import {HttpClient} from '@angular/common/http';
import {ResponseApi} from '../Model/ApiResponse';
import {Observable} from 'rxjs';
import {Login} from '../Model/login';
import {Usuario} from '../Model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }

  private urlApi:string =environment.endpoint;
  IniciarSesion(request:Login):Observable<ResponseApi>{
    return this.http.post<ResponseApi>(`${this.urlApi}user/login`,request)
  }

  ListaUsuarios():Observable<ResponseApi>{
    return this.http.get<ResponseApi>(`${this.urlApi}listUsers`)
  }

  Guardar(request:Usuario):Observable<ResponseApi>{
    return this.http.post<ResponseApi>(`${this.urlApi}user/register`,request)
  }

  Editar(request:Usuario):Observable<ResponseApi>{
    return this.http.put<ResponseApi>(`${this.urlApi}user/Editar`,request)
  }
  /***************************
   Registro(request:Registro):Observable<ResponseApi>{
   return this.http.post<ResponseApi>(`${this.urlApi}register`,request)
   }

   ************************/
  Eliminar(id:number):Observable<ResponseApi>{
    return this.http.delete<ResponseApi>(`${this.urlApi}Eliminar/${id}`)
  }

}
