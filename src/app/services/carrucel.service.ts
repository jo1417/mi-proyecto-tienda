import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';

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

private cacheIzq: Imagen[] | null = null;
private cacheDer: Imagen[] | null = null;

  constructor(private http: HttpClient) {}

  getCarruselIzq(): Observable<Imagen[]> {
  if (this.cacheIzq) return of(this.cacheIzq);

  return this.http.get<Imagen[]>(`${this.baseUrl}/carruselIzq`).pipe(
    tap((data: Imagen[]) => this.cacheIzq = data)
  );

  }

  // Traer carrusel derecho
  getCarruselDer(): Observable<Imagen[]> {
    if (this.cacheDer) return of(this.cacheDer);
    return this.http.get<Imagen[]>(`${this.baseUrl}/carruselDer`).pipe(
      tap((data: Imagen[]) => this.cacheDer = data)
    );
  }
}
