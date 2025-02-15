import { Routes } from '@angular/router';
import {StoreComponent} from './components/store/store.component';
import {CartItemComponent} from './components/cart-item/cart-item.component';
import {RegisterComponent} from './components/register/register.component';
import {LoginComponent} from './components/login/login.component';
import {ProfileComponent} from './components/profile/profile.component';
import {ProductsComponent} from './components/products/products.component';

export const routes: Routes = [
  {path:"",component:StoreComponent,pathMatch:"full"},
  {path:'store',component:StoreComponent,pathMatch:"full"},
  {path:'carrito',component:CartItemComponent,pathMatch:"full"},
  {path:'login',component:LoginComponent,pathMatch:"full"},
  {path: 'register', component:RegisterComponent, pathMatch:"full"},
  {path: 'profile',component:ProfileComponent,pathMatch:"full"},
  {path:'products', component:ProductsComponent},
  { path: "**", redirectTo: "store", pathMatch: "full" }
];
