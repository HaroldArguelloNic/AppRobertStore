import {Component, inject, OnInit, signal} from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {ProductService} from '../../core/Services/product.service';
import {Product} from '../../core/Model/Product';
import {FormControl, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import {UploadService} from '../../core/Services/upload.service';


class ImageSnippet {
  pending: boolean = false;
  status: string = 'init';
  constructor(public src: string, public file: File) {}
}
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    HeaderComponent,
    ReactiveFormsModule
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  listaProductos = signal<Product[]>([]);

  productsService = inject(ProductService);
  selectedFile: ImageSnippet | undefined;


  formProducto = new FormGroup({
    nameProducto: new FormControl('', [Validators.required]),
    descriptionProducto: new FormControl('', [Validators.required]),
    categoryProducto: new FormControl(0, [Validators.required]),
    priceProducto: new FormControl(0, [Validators.required]),
    imagenProducto: new FormControl(),
    stockProducto: new FormControl(0, [Validators.required]),

  });
  private productopath: string = '';
  public file: File | undefined;

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productsService.ListaProductos().subscribe({
      next: ((data) => {
        this.listaProductos.set(data.value)
      })

    })
  }


  onFileChange(imageInput: any) {

    const file: File = imageInput.files[0];
    this.selectedFile = new ImageSnippet(imageInput, file);
    this.uploadService.upload(this.selectedFile.file).subscribe({
      next: (data) => {
        if (data.status) {
          this.productopath = data.value as string;
          console.log(this.productopath);
          console.log(data.message);
        }
      }
    })

  }

  addProduct() {
    const requestProduct: Product = {
      id: 0,
      name: this.formProducto.value.nameProducto as string,
      description: this.formProducto.value.descriptionProducto as string,
      category_id: this.formProducto.value.categoryProducto as number,
      price: this.formProducto.value.priceProducto as number,
      stock: this.formProducto.value.stockProducto as number,
      image_path: this.productopath,
      active: 1,
    }

    this.productsService.AgregarProducto(requestProduct).subscribe({
      next: ((data) => {
        this.listaProductos.set(data.value)
      })
    })
  }
  constructor(private uploadService: UploadService) { }

}
