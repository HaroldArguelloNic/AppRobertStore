import { Injectable, signal } from '@angular/core';
import {Product} from '../Model/Product';
import {CartItem} from '../../interface/cart-item';
import {Venta} from '../Model/venta';
import {ResponseApi} from '../Model/ApiResponse';
import {environment} from '../../../environments/Environment';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private urlApi:string= environment.endpoint;

  //cart=signal<Product[]>([]);
cart = signal<CartItem[]>([])
  total: number = 0;
  addToCart(product:Product, quantity:number ) {

    this.cart().push({
      ProductoId:product.id,
      ProductoName: product.name,
      ProductoImage: product.image_path,
      ProductoPrice: product.price,
      ProductoQty: quantity,
    });
    this.total= this.calculateTotal();
  }

  calculateTotal(): number {
    return this.cart().reduce((acc,item) => acc + (item.ProductoPrice * item.ProductoQty), 0);
  }

  removeFromCart(id:number) {
    this.cart.set(this.cart().filter((p) => p.ProductoId !== id));

  }

  RegistrarVenta(request:Venta):Observable<ResponseApi>{
    return this.http.post<ResponseApi>(`${this.urlApi}orders`,request)
  }



  constructor(private http:HttpClient) { }
}
