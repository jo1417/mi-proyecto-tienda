import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Interfaz para las imágenes
export interface Imagen {
  id: number;
  img: string;
}

@Injectable({
  providedIn: 'root'
})
export class CarrucelService {
  private baseUrl = 'http://localhost:3000'; // URL de JSON Server

  constructor(private http: HttpClient) {}

  // Traer carrusel izquierdo
  getCarruselIzq(): Observable<Imagen[]> {
    return this.http.get<Imagen[]>(`${this.baseUrl}/carruselIzq`);
  }

  // Traer carrusel derecho
  getCarruselDer(): Observable<Imagen[]> {
    return this.http.get<Imagen[]>(`${this.baseUrl}/carruselDer`);
  }
}
