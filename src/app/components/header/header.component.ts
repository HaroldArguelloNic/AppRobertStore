import { Component, signal } from '@angular/core';
import { PrimaryButtonComponent } from "../primary-button/primary-button.component";
import {RouterLink} from '@angular/router';


@Component({
  selector: 'app-header',
  imports: [ RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  cart = signal('cart');

  showButtonClicked() {
    console.log('clicked');
  }

}
