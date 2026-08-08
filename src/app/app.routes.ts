import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { productsResolver } from './products-resolver';
import { ProductoDetalleComponent } from './components/producto-detalle/producto-detalle';
import { Productoss } from './pages/productoss/productoss';
import { Requisitos } from './components/requisitos/requisitos';
import { Productos } from './services/productos';
import { CarrucelService } from './services/carrucel.service';

//import de los componentes para el login y la seguridad de las rutas
import { Login } from './pages/login/login';
import { authGuard } from './guards/auth-guard';
import { Admin } from './pages/admin/admin';
import { AdminProductos } from './pages/admin-productos/admin-productos';
import { AdminCarrucel } from './pages/admin-carrucel/admin-carrucel';
import { Carrucel } from './components/carrucel/carrucel';



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
  { path: 'productos/:id', component: ProductoDetalleComponent },

  {
  path: 'login',
  component: Login
},

  {
  path: 'productos',
  component: Productos
},

 {
  path: 'carrucel',
  component: CarrucelService
},
 {
  path: 'carrucel',
  component: Carrucel
},

{
  path: 'admin',
  component: Admin,
  canActivate: [authGuard]
},

{
  path: 'admin-productos',
  component: AdminProductos,
   canActivate: [authGuard]
  
},

{
  path: 'admin-carrucel',
  component: AdminCarrucel,
   canActivate: [authGuard]
  
}


];


