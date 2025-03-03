import {inject, Injectable, signal} from '@angular/core';
import {Product} from '../Model/Product';
import {CartItem} from '../../interface/cart-item';
import {Venta} from '../Model/venta';
import {ResponseApi} from '../Model/ApiResponse';
import {environment} from '../../../environments/Environment';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ToastService} from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private urlApi:string= environment.endpoint;
  toastService= inject(ToastService);

  //cart=signal<Product[]>([]);
cart = signal<CartItem[]>([])
  //si el producto ya esta que aumente solamente la cantidad y no lo duplique
  total: number = 0;
  addToCart(product:Product, quantity:number ) {
    for (let item of this.cart()) {
      if (item.ProductoId === product.id) {
        item.ProductoQty += quantity;
        this.total = this.calculateTotal();
        this.toastService.mostrarToast("success", "Producto adicionado!");
        return;
      }
    }
    //Si no esta que lo agregue
    this.cart().push({
      ProductoId:product.id,
      ProductoName: product.name,
      ProductoImage: product.image_path,
      ProductoPrice: product.price,
      ProductoQty: quantity,
    });
    this.total= this.calculateTotal();
    this.toastService.mostrarToast("success", "Producto adicionado!");
  }

  calculateTotal(): number {
    return this.cart().reduce((acc,item) => acc + (item.ProductoPrice * item.ProductoQty), 0);
  }

  removeFromCart(id:number) {
    this.cart.set(this.cart().filter((p) => p.ProductoId !== id));

  }

  RegistrarVenta(request: {
    status: string;
    total: number;
    user_id: number;
    products: { id: number; quantity: number; price: number; subtotal: number }[]
  }):Observable<ResponseApi>{
    return this.http.post<ResponseApi>(`${this.urlApi}orders`,request)
  }

  // Método para generar la venta
  generateVenta(usuarioId: number): {
    status: string;
    total: number;
    user_id: number;
    products: { id: number | undefined; quantity: number; price: number; subtotal: number }[]
  } {
    const productos = this.cart().map(item => ({
      id: item.ProductoId,
      quantity: item.ProductoQty,
      price: item.ProductoPrice,
      subtotal: item.ProductoQty * item.ProductoPrice,
    }));

    return {
      status: "pendiente",
      total: productos.reduce((sum, p) => sum + p.subtotal, 0),
      user_id: usuarioId,
      products: productos,
    };

  }

  // Método para limpiar el carrito después de registrar la venta
  clearCart() {
    this.cart.set([]);
  }



  constructor(private http:HttpClient) { }
}
