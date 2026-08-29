import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { ProductosService } from './services/producto.service';

// EL RESOLVER ME AYUDA A CARGAR LOS DATOS DE MIS SERVICIOS
// ANTES DE CARGAR MI PAGINA 

export const productsResolver: ResolveFn<any[]> = () => {
  return inject(ProductosService).getProductos();
};

