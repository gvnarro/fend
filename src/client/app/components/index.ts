import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { CheckoutComponent } from  './checkout/checkout.component';


export const APP_COMPONENTS: any[] = [
  AppComponent,
  AboutComponent,
  HomeComponent, 
  IndexComponent,
  LoginComponent,
  RegisterComponent,
  ProductComponent,
  ProductsComponent, 
  CheckoutComponent
];

export * from './app.component';
export * from './about/about.component';
export * from './home/home.component';
export * from './checkout/checkout.component';
export * from './index/index.component';
export * from './login/login.component';
export * from './product/product.component';
export * from './products/products.component';
export * from './register/register.component';
