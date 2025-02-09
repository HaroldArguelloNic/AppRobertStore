import { Component, Inject, Injectable, signal } from '@angular/core';
import {RouterLink} from '@angular/router';
import { CartService } from '../../core/Services/cart.service';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';


@Component({
  selector: 'app-header',
  imports: [ RouterLink, PrimaryButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  cart = signal('Cart');

  cartservice = Inject(CartService);

  showButtonClicked() {
    console.log("clicked");
  }

}
