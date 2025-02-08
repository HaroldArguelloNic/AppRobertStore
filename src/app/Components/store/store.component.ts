import {Component, NgModule, OnInit} from '@angular/core';
import { Product } from '../../core/Model/Product';
import {CommonModule} from '@angular/common';
import {ProductService} from '../../core/Services/product.service';
import { HeaderComponent } from '../header/header.component';
import { CarouselComponent } from '../carousel/carousel.component';


@Component({
  selector: 'app-store',
  imports: [CommonModule, HeaderComponent],
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  listStartProduct: Product[] = [];
  paginatedProducts: Product[] = [];
  currentPage:number = 1;
  itemsForPage:number=10;


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
          this.updatePageProduct();
        } else {
          console.log('No se encontraron productos');
        }
      },
      error: (e) => {
        console.log('Error al cargar los productos', e);
      }
    });
  }

  updatePageProduct() {
    const startIndex = (this.currentPage - 1) * this.itemsForPage;
    const endIndex = startIndex + this.itemsForPage;
    this.paginatedProducts = this.listStartProduct.slice(startIndex, endIndex);
  }

  changePageProduct(page: number) {
    if (page >= 1 && page <= this.getTotalPages()) {
      this.currentPage = page;
      this.updatePageProduct();
    }
  }

  getTotalPages(): number {
    return Math.max(1, Math.ceil(this.listStartProduct.length / this.itemsForPage)); // Mínimo 1 página
  }

  getPageNumbers(): number[] {
    return Array.from({ length: this.getTotalPages() }, (_, i) => i + 1);

  }

}
