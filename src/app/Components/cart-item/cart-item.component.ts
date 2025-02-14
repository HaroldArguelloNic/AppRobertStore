import {Component, inject, input,} from '@angular/core';
import {CartService} from '../../core/Services/cart.service';
import {HeaderComponent} from '../header/header.component';
//import {ButtonComponent} from '../button/button.component';
import {Product} from '../../core/Model/Product';
import {ButtonComponent} from '../button/button.component';


@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [
    HeaderComponent,
    ButtonComponent,
    //ButtonComponent
  ],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss'
})
export class CartItemComponent {
  cartService = inject(CartService);

  items= input.required<Product>();

  quantity: number = 1;

  incrementQty(id: number) {
    // buscamos por el id del producto
    const targetItem = this.cartService.cart().find((pitem) => pitem.ProductoId === id);
    if (targetItem) {
      //actualizamos el incremento en la cantidad del producto del id encontrado
      targetItem.ProductoQty++;
      // Actualizamos el signal con la nueva cantidad incrementada
      this.cartService.cart.update(
        (cart) => cart.map((item) => item.ProductoId === id ? targetItem : item));
    }
  }
decrementQty(id: number) {
  const targetItem = this.cartService.cart().find((pitem) => pitem.ProductoId === id);
  if (targetItem) {
    //actualizamos el incremento en la cantidad del producto del id encontrado
    targetItem.ProductoQty--;
    //Actualizamos el signal con la nueva cantidad incrementada
    this.cartService.cart.update(
      (cart) => cart.map((item) => item.ProductoId === id ? targetItem : item));
  }
}
  constructor() {
  }
}






