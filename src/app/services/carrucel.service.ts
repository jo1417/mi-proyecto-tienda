import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';
import { DataSource } from '../config/data-source';

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

  if (!DataSource.firebase) {

    return this.http.get<Imagen[]>(`${this.baseUrl}/carruselIzq`).pipe(
      tap((data: Imagen[]) => this.cacheIzq = data)
    );

  }

  return new Observable<Imagen[]>(observer => {

    getDocs(collection(db, 'carruselIzq'))
      .then(snapshot => {

        const imagenes = snapshot.docs.map(doc => doc.data() as Imagen);

        this.cacheIzq = imagenes;

        observer.next(imagenes);
        observer.complete();

      })
      .catch(error => observer.error(error));

  });

}

  // Traer carrusel derecho
 getCarruselDer(): Observable<Imagen[]> {

  if (this.cacheDer) return of(this.cacheDer);

  if (!DataSource.firebase) {

    return this.http.get<Imagen[]>(`${this.baseUrl}/carruselDer`).pipe(
      tap((data: Imagen[]) => this.cacheDer = data)
    );

  }

  return new Observable<Imagen[]>(observer => {

    getDocs(collection(db, 'carruselDer'))
      .then(snapshot => {

        const imagenes = snapshot.docs.map(doc => doc.data() as Imagen);

        this.cacheDer = imagenes;

        observer.next(imagenes);
        observer.complete();

      })
      .catch(error => observer.error(error));

  });

}
}
