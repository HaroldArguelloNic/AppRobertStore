import { Injectable } from '@angular/core';
import {environment} from '../../../environments/Environment';
import {HttpClient} from '@angular/common/http';
import {ResponseApi} from '../Model/ApiResponse';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private urlApi:string=environment.endpoint;

  constructor(private http:HttpClient) { }
  ListaMenu(idUsuario: number): Observable<ResponseApi> {
    return this.http.get<ResponseApi>(`${this.urlApi}menu/${idUsuario}`);

  };


}

