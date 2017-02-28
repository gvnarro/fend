import { CategoryService } from './category.service';
import { SectorService } from './sector.service';
import { ProductService } from './product.service';



export const APP_SERVICES: any[] = [
  CategoryService,
  SectorService,
  ProductService 
];

export * from './category.service';
export * from './sector.service';
export * from './product.service';

