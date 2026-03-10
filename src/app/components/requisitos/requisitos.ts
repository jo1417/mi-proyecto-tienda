import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
selector: 'app-requisitos',
standalone: true,
imports: [CommonModule, RouterModule],
templateUrl: './requisitos.html',
styleUrl: './requisitos.css',
})

export class Requisitos  {

requisitos = [
    {
      icono: 'bx bx-user-plus',
      titulo: '4 referencias: ',
      descripcion: ' 2 personales y 2 familiares (nombre, teléfono y dirección)'
    },
    {
      icono: 'bx bx-home',
      titulo: 'Dirección de tu vivienda:  ',
      descripcion: 'Dirección exacta de donde resides actualmente'
    },
    {
      icono: 'bx bx-buildings',
      titulo: 'Información laboral: ',
      descripcion: 'Dirección y teléfono del lugar donde trabajas'
    },
    {
      icono: 'bx bx-id-card',
      titulo: 'Datos personales completos:  ',
      descripcion: 'Nombre, cédula, número de contacto, entre otros'
    }
  ];
}


