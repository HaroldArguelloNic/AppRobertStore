import { Component, inject, OnInit, input} from '@angular/core';
import { ProductService } from '../../core/Services/product.service'; 
import { Product } from '../../core/Model/Product';
import { HeaderComponent } from '../header/header.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { CartService } from '../../core/Services/cart.service';
import { ProductcardComponent } from "../productcard/productcard.component";


@Component({
  selector: 'app-store',
  standalone: true,
  imports: [HeaderComponent, CarouselComponent, ProductcardComponent],
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  listStartProduct: Product[] = [];  //
  
  constructor(private _productService: ProductService,

  ) {}

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
  cartService = inject(CartService)

  product = input.required<Product>();

}
