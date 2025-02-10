import { Routes } from '@angular/router';
import {StoreComponent} from './Components/store/store.component';
import {CartItemComponent} from './Components/cart-item/cart-item.component';

export const routes: Routes = [
  {path:"",component:StoreComponent,pathMatch:"full"},
  {path:'carrito',component:CartItemComponent,pathMatch:"full"},
  { path: "**", redirectTo: "store", pathMatch: "full" }
];
