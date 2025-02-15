import { Injectable } from '@angular/core';
import {environment} from '../../../environments/Environment';
import {HttpClient} from '@angular/common/http';
import {ResponseApi} from '../Model/ApiResponse';
import {Observable} from 'rxjs';
import {Customer} from '../Model/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  private urlApi:string =environment.endpoint;

  Guardar(request:Customer):Observable<ResponseApi>{
    return this.http.post<ResponseApi>(`${this.urlApi}customers`,request)
  }

  obtenerPerfil(email:string):Observable<ResponseApi>{
    return this.http.get<ResponseApi>(`${this.urlApi}Customers/${email}`)
  }


}
