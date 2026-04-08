import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductosService } from '../../services/producto.service';
import { SearchService } from '../../services/search.service';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productoss',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './productoss.html',
  styleUrls: ['./productoss.css']
})

export class Productoss implements OnInit {

productos: any[] = [];
colores: string[] = [];
slug: string | null = null;

// filtros como BehaviorSubject
tipoSeleccionado$ = new BehaviorSubject<string>('todos');
colorSeleccionado$ = new BehaviorSubject<string>('todos');

// valores actuales para el template (botones activos)
tipoActual: string = 'todos';
colorActual: string = 'todos';
descripcion: string = 'todos';
// observable de productos filtrados
productosFiltrados$!: Observable<any[]>;

constructor(
private productosService: ProductosService,
private route: ActivatedRoute,
private searchService: SearchService,
private router: Router
) {}

ngOnInit(): void {
this.slug = this.route.snapshot.paramMap.get('slug');

 this.route.queryParams.subscribe(params => {
      const tipo = params['tipo'];
      if (tipo) this.filtrar(tipo, 'todos');
    });

this.productosService.getProductos().subscribe({
next: data => {

// guardo productos
this.productos = data.map(p => ({
...p,

imagenActiva: p.imagenes && p.imagenes.length ? p.imagenes[0] : p.imagen // inicializo imagen principal
}));



// obtener colores únicos
this.colores = Array.from(
  new Set(this.productos.map(p => p.color))
).filter(c => c);

// observable de productos filtrados
this.productosFiltrados$ = combineLatest([
this.searchService.search$,
this.tipoSeleccionado$,
this.colorSeleccionado$,

]).pipe(
map(([textoBusqueda, tipo, color]) => {
    const txt = textoBusqueda.toLowerCase();
      return this.productos.filter(p => {
    const categoriaOk = this.slug ? p.categoria === this.slug : true;
    const tipoOk = tipo === 'todos' ? true : p.tipo === tipo;
    const colorOk = color === 'todos' ? true : p.color === color;

    const textoOk = txt
? (
(p.nombre && p.nombre.toLowerCase().includes(txt)) ||
(p.categoria && p.categoria.toLowerCase().includes(txt)) ||
(p.tipo && p.tipo.toLowerCase().includes(txt)) ||
(p.color && p.color.toLowerCase().includes(txt)) 

  )
: true;

return categoriaOk && tipoOk && colorOk && textoOk;
});
  })
    );
      },
error: err => console.error('Error cargando productos', err)
});
}

// cambiar filtros
filtrar(tipo: string, color: string) {
this.tipoSeleccionado$.next(tipo);
this.colorSeleccionado$.next(color);
this.tipoActual = tipo;
this.colorActual = color;
}

// cambiar imagen principal al hacer clic en miniatura
cambiarImagen(p: any, img: string) {
p.imagenActiva = img;
}

precioFinal(p: any): number {
 return p.oferta 
 ? p.precio - (p.precio * p.descuento / 100)
  : p.precio;
}

obtenerLinkWhatsApp(p: any): string {
const mensaje = `Hola! Estoy interesado en el producto ${p.nombre} con precio ${this.precioFinal(p)}`;
  return `https://wa.me/573046637509?text=${encodeURIComponent(mensaje)}`;
}

verDetalle(id: number) {
this.router.navigate(['/productos', id]);
}

//esta funcion me ayuda a renderizar mi pagina cuando agrego un producto nuevo solo se actualiza ese producto que agregue o modifique mas no todos nuevamente 

  productosId(_index: number, item: any): number {
    return item.id;
  }
} 




