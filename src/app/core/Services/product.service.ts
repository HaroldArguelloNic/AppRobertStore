import { Injectable } from '@angular/core';
import {environment} from '../../../environments/Environment';
import {HttpClient} from '@angular/common/http';
import {ResponseApi} from '../Model/ApiResponse';
import {Observable} from 'rxjs';
import {Product} from '../Model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  private urlApi:string =environment.endpoint;
  ListaProductos():Observable<ResponseApi>{
    return this.http.get<ResponseApi>(`${this.urlApi}products`)
  }

  AgregarProducto(requestProduct:Product):Observable<ResponseApi>{
    return this.http.post<ResponseApi>(`${this.urlApi}products/store`, requestProduct)
  }

}
