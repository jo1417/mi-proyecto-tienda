import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Combos } from '../services/combos';
import {Productos} from '../services/productos';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-combos',
  imports: [CommonModule],
  templateUrl: './combos.html',
  styleUrl: './combos.css',
})
export class CombosComponent implements OnInit {

 
  comboLista: any[] = [];
  productosLista: any[] = [];

  constructor(
    private combos: Combos,
    private productos: Productos,
    private cdr: ChangeDetectorRef,
    private router : Router
  ) {}

  async ngOnInit() {

  try {

    const combos = await this.combos.obtenerCombo();

    const productos = await this.productos.obtenerProductos();

    this.comboLista = combos;
    this.productosLista = productos;

    this.cdr.detectChanges();

  } catch (error) {

    console.error('Error cargando combos:', error);

  }

}

  obtenerProducto(docId: string) {

  return this.productosLista.find(
    producto => producto.docId === docId
  );

}

verDetalleCombo(docId: string) {
  this.router.navigate(['/combo-detalle', docId]);
}


obtenerLinkWhatsApp(combo: any): string {

  const mensaje =
    `Hola! Estoy interesado en el combo ${combo.nombre} con precio ${combo.precio}`;

  return `https://wa.me/573046637509?text=${encodeURIComponent(mensaje)}`;

}


 

}



