import {Component, inject, OnInit,} from '@angular/core';
import {RouterLink,} from '@angular/router';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';
import {MenuService} from '../../core/Services/menu.service';
import {Menu} from '../../core/Model/Menu';
import {CartService} from '../../core/Services/cart.service';


@Component({
  standalone: true,
  templateUrl: './header.component.html',
  selector: 'app-header',
  styleUrl: './header.component.scss',
  imports: [PrimaryButtonComponent, RouterLink, ]
})
export class HeaderComponent implements OnInit {

  listMenu: Menu[]=[];
  isLogin: boolean = false;
  cartService=inject(CartService);

  constructor(private _menuService: MenuService, ) {}

  ngOnInit() {
    if (this.isLogin) {
      this.loadMenu();
    }

  }

  loadMenu() {
    this._menuService.ListaMenu(1).subscribe({
      next: (data) => {
        if (data.status) {
          this.listMenu=data.value;
        }
      }
    })
  }
  showButtonClicked(){console.log("clicked");}

  protected readonly CartService = CartService;
}
