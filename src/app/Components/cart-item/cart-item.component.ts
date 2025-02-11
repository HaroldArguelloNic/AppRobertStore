import {Component, inject, input,} from '@angular/core';
import {CartService} from '../../core/Services/cart.service';
import {HeaderComponent} from '../header/header.component';
import {ButtonComponent} from '../button/button.component';
import {Product} from '../../core/Model/Product';


@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [
    HeaderComponent,
    ButtonComponent
  ],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss'
})
export class CartItemComponent {
  cartService = inject(CartService);

  items= input.required<Product>();

  constructor() {
  }
}






