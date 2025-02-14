import {Component, inject, OnInit,} from '@angular/core';
import {RouterLink,} from '@angular/router';
import {MenuService} from '../../core/Services/menu.service';
import {Menu} from '../../core/Model/Menu';
import {CartService} from '../../core/Services/cart.service';
import {UtilidadService} from '../../core/Services/utilidad.service';
import {CommonModule} from '@angular/common';
import {PrimaryButtonComponent} from '../primary-button/primary-button.component';
//import {PrimaryButtonComponent} from '../primary-button/primary-button.component';




@Component({
  standalone: true,
  templateUrl: './header.component.html',
  selector: 'app-header',
  styleUrl: './header.component.scss',
  imports: [//PrimaryButtonComponent,
    RouterLink, CommonModule, PrimaryButtonComponent, //PrimaryButtonComponent
  ]
})
export class HeaderComponent implements OnInit {

  listMenu: Menu[]=[];
  isLogin: boolean = false;
  cartService=inject(CartService);

  constructor(private _menuService: MenuService,
              private utilidadService:UtilidadService) {}

  ngOnInit() {
    /*
    if (this.isLogin) {
      this.loadMenu();
    }*/
    this.isLogin = this.utilidadService.usuarioAutenticado();
  }

  logout() {
    this.utilidadService.eliminarSesionUsuario();
    this.isLogin = false;
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

}
