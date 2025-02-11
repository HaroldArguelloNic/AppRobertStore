import {Component, inject, input} from '@angular/core';
import { Product } from '../../core/Model/Product';
import {CartService} from '../../core/Services/cart.service';
import {PrimaryButtonComponent} from '../primary-button/primary-button.component';

@Component({
  selector: 'app-productcard',
  imports: [
    PrimaryButtonComponent
  ],
  templateUrl: './productcard.component.html',
  styleUrl: './productcard.component.scss'
})
export class ProductcardComponent{

cartService = inject(CartService);

product = input.required<Product>();

}
