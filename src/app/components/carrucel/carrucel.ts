import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CarrucelService, Imagen } from '../../services/carrucel.service';

@Component({
  selector: 'app-carrucel',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './carrucel.html',
  styleUrls: ['./carrucel.css']
})
export class Carrucel implements OnInit {

  imagenesIzq: Imagen[] = [];
  posicionActual = 0;

  // Links quemados
  links = [
    { nombre: 'Colchones',  img: '/assets/img/colchonInicio.jpg',   ruta: '/categoria/colchon' },
    { nombre: 'Espaldares', img: '/assets/img/espaldarInicio.jpg',  ruta: '/categoria/espaldar' },
    { nombre: 'Base cama',  img: '/assets/img/basecamaInicio.jpg',  ruta: '/categoria/base-cama' },
    { nombre: 'Armarios',   img: '/assets/img/armarioInicio.jpg',   ruta: '/categoria/armario' },
    { nombre: 'Comedores',  img: '/assets/img/comedoresInicio.jpg', ruta: '/categoria/comedor' },
    { nombre: 'Peinadores', img: '/assets/img/peinadorInicio.jpg',  ruta: '/categoria/peinador' },
    { nombre: 'Salas',      img: '/assets/img/salasInicio.jpg',     ruta: '/categoria/sala' },
    { nombre: 'Cama lujo',  img: '/assets/img/camalujoInicio1.jpg', ruta: '/categoria/lujo' }
  ];

  constructor(
    private carrucelService: CarrucelService,
    private cd: ChangeDetectorRef
  ) {}

ngOnInit(): void {

  console.time("Carrucel");

  this.carrucelService.getCarrusel().subscribe({

    next: (data) => {

      console.timeEnd("Carrucel");
      console.log(data);

      this.imagenesIzq = data;
      this.posicionActual = 0;

      this.cd.detectChanges();

    },

    error: (err) => console.error(err)

  });

}

  siguiente() {
    if (this.imagenesIzq.length === 0) return;

    this.posicionActual =
      (this.posicionActual + 1) % this.imagenesIzq.length;
  }

  anterior() {
    if (this.imagenesIzq.length === 0) return;

    this.posicionActual =
      (this.posicionActual - 1 + this.imagenesIzq.length) %
      this.imagenesIzq.length;
  }
}
