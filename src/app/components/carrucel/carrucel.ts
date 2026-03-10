import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

interface Imagen {
id: number;
img: string;
}

@Component({
selector: 'app-carrucel',
standalone:true,
imports:[ CommonModule, RouterModule, HttpClientModule],
templateUrl: './carrucel.html',
styleUrls: ['./carrucel.css']
})

export class Carrucel implements OnInit{

// Carrusel izquierdo
imagenesIzq: Imagen[] = [];
posicionActual = 0;
posicionImagen:any;


// Links quemados
links = [
    { nombre: 'Colchones',  img: '/assets/img/colchonInicio.jpg',   ruta: '/categoria/colchon' },
    { nombre: 'Espaldares', img: '/assets/img/espaldarInicio.jpg',  ruta: '/categoria/espaldar' },
    { nombre: 'Base cama',  img: '/assets/img/basecamaInicio.jpg',  ruta: '/categoria/base-cama' },
    { nombre: 'Armarios',   img: '/assets/img/armarioInicio.jpg',    ruta: '/categoria/armario' },
    { nombre: 'Comedores',  img: '/assets/img/comedoresInicio.jpg',  ruta: '/categoria/comedor' },
    { nombre: 'Peinadores', img: '/assets/img/peinadorInicio.jpg',   ruta: '/categoria/peinador' },
    { nombre: 'Salas',      img: '/assets/img/salasInicio.jpg',      ruta: '/categoria/sala' },
    { nombre: 'Cama lujo',  img: '/assets/img/camalujoInicio1.jpg', ruta: '/categoria/lujo' }
];

constructor(private http: HttpClient, private cd: ChangeDetectorRef) {}

ngOnInit(): void {
this.http.get<Imagen[]>('http://localhost:3000/carrusel')
.subscribe(data => {
  this.imagenesIzq = data;
  this.posicionActual = 0;

//  Forzar actualización visual
this.cd.detectChanges();
});
}

// Funciones del carrusel izquierdo
siguiente() {
if (this.imagenesIzq.length == 0) return;
  this.posicionActual =(this.posicionActual + 1) % this.imagenesIzq.length;
}

anterior() {
if (this.imagenesIzq.length == 0) return;
  this.posicionActual = (this.posicionActual - 1 + this.imagenesIzq.length) % this.imagenesIzq.length;
}
}

