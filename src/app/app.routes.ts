import { Routes } from '@angular/router';
import {StoreComponent} from './components/store/store.component';
import {CartItemComponent} from './components/cart-item/cart-item.component';

export const routes: Routes = [
  {path:"",component:StoreComponent,pathMatch:"full"},
  {path:'store',component:StoreComponent,pathMatch:"full"},
  {path:'carrito',component:CartItemComponent,pathMatch:"full"},
  { path: "**", redirectTo: "store", pathMatch: "full" }
];
