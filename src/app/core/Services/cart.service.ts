import { Injectable, signal } from '@angular/core';
import {Product} from '../Model/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart=signal<Product[]>([]);

  addToCart(product:Product) {

    this.cart().push(product);
  }

  removeFromCart(id:number) {
    this.cart.set(this.cart().filter((p) => p.id !== id));


  }


  constructor() { }
}
