import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { ProductosService } from './services/producto.service';

export const productsResolver: ResolveFn<any[]> = () => {
  return inject(ProductosService).getProductos();
};

