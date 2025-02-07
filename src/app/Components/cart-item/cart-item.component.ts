import {Component, inject, OnInit} from '@angular/core';
import {CartService} from '../../core/Services/cart.service';


@Component({
  selector: 'app-cart-item',
  imports: [],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss'
})
export class CartItemComponent implements OnInit{
  private _cartService= inject(CartService);

  ngOnInit(){

  }


}
