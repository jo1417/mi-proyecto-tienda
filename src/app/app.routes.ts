import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { productsResolver } from './products-resolver';
import { ProductoDetalleComponent } from './components/producto-detalle/producto-detalle';
import { Productoss } from './pages/productoss/productoss';
import { Requisitos } from './components/requisitos/requisitos';


export const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: Home,
    resolve: { productos: productsResolver }
  },
    
  {path: 'productoss', component: Productoss},
  { path: 'categoria/:slug', component: Productoss },
  {path: 'requisitos', component: Requisitos},
  { path: 'productos/:id', component: ProductoDetalleComponent }


];


