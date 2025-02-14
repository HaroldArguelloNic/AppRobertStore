import {Component, inject, input,} from '@angular/core';
import {CartService} from '../../core/Services/cart.service';
import {HeaderComponent} from '../header/header.component';
//import {ButtonComponent} from '../button/button.component';
import {Product} from '../../core/Model/Product';
import {ButtonComponent} from '../button/button.component';
import {UtilidadService} from '../../core/Services/utilidad.service';
import {ResponseApi} from '../../core/Model/ApiResponse';


@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [
    HeaderComponent,
    ButtonComponent,
    //ButtonComponent
  ],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss'
})
export class CartItemComponent {
  cartService = inject(CartService);
  utilidadService= inject (UtilidadService);

  items= input.required<Product>();

  quantity: number = 1;

  user_id: number | undefined = this.utilidadService.obtenerSesionUsuario()?.id;



  confirmarCompra() {
    const venta = this.cartService.generateVenta(this.user_id!);
    if (!this.user_id) {
      alert('Debe iniciar sesión para confirmar la compra.');
      return;
    }
    this.cartService.RegistrarVenta(venta).subscribe(
      (response: ResponseApi) => {
        if (response.status) {
          alert(`Venta registrada exitosamente: ${response.message}`);
          this.cartService.clearCart(); // Vaciar carrito después de la compra
        } else {
          alert(`Error al registrar la venta: ${response.message}`);
        }
      },
      error => {
        alert('Error en la solicitud: ' + error.message);
      }
    );
  }

  incrementQty(id: number) {
    // buscamos por el id del producto
    const targetItem = this.cartService.cart().find((pitem) => pitem.ProductoId === id);
    if (targetItem) {
      //actualizamos el incremento en la cantidad del producto del id encontrado
      targetItem.ProductoQty++;
      // Actualizamos el signal con la nueva cantidad incrementada
      this.cartService.cart.update(
        (cart) => cart.map((item) => item.ProductoId === id ? targetItem : item));
    }
  }
decrementQty(id: number) {
  const targetItem = this.cartService.cart().find((pitem) => pitem.ProductoId === id);
  if (targetItem) {
    //actualizamos el incremento en la cantidad del producto del id encontrado
    targetItem.ProductoQty--;
    //Actualizamos el signal con la nueva cantidad incrementada
    this.cartService.cart.update(
      (cart) => cart.map((item) => item.ProductoId === id ? targetItem : item));
  }
}


  constructor() {
  }
}






