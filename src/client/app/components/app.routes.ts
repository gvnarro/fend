// app
import { HomeRoutes } from './home/home.routes';
import { AboutRoutes } from './about/about.routes';

import { IndexRoutes } from './index/index.routes';
import { ProductRoutes } from './product/product.routes';
import { ProductsRoutes } from './products/products.routes';
import { LoginRoutes } from './login/login.routes';
import { RegisterRoutes } from './register/register.routes';
import { CheckoutRoutes } from './checkout/checkout.routes';

export const routes: Array<any> = [
  ...IndexRoutes,
  // ...HomeRoutes,
  ...ProductRoutes,
  ...ProductsRoutes,
  ...LoginRoutes, 
  ...RegisterRoutes,
  ...CheckoutRoutes,  
  ...AboutRoutes  
];

