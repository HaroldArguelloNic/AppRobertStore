import { Component, input } from '@angular/core';
import { Product } from '../../core/Model/Product';

@Component({
  selector: 'app-productcard',
  imports: [],
  templateUrl: './productcard.component.html',
  styleUrl: './productcard.component.scss',
})
export class ProductcardComponent {

  product = input.required<Product>();

}
