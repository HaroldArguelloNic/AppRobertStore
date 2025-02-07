import {Component, NgModule, OnInit} from '@angular/core';
import { Product } from '../../core/Model/Product';
import {CommonModule} from '@angular/common';
import {ProductService} from '../../core/Services/product.service';


@Component({
  selector: 'app-store',
  imports: [CommonModule],
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  listStartProduct: Product[] = [];  //

  constructor(private _productService: ProductService,

  ) {}

  trackByFn(index: number, item: any): number {
    return item.id;
  }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this._productService.ListaProductos().subscribe({
      next: (data) => {
        if (data.status) {
          this.listStartProduct = data.value;
        } else {
          console.log('No se encontraron productos');
        }
      },
      error: (e) => {
        console.log('Error al cargar los productos', e);
      }
    });
  }

}
