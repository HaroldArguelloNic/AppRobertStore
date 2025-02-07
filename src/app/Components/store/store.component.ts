import {Component, NgModule, OnInit} from '@angular/core';
import { Product } from '../../core/Model/Product';
import {CommonModule} from '@angular/common';
import {ProductService} from '../../core/Services/product.service'; 
import { HeaderComponent } from '../header/header.component';
import { CarouselComponent } from '../carousel/carousel.component';


@Component({
  selector: 'app-store',
  imports: [CommonModule, HeaderComponent, CarouselComponent ],
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  listStartProduct: Product[] = [];  //

  
public slides = [
  { src: "/img/baner1.jpg" },
  { src: "/img/baner2.jpg" },
  { src: "/img/baner3.jpg" },
];


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
