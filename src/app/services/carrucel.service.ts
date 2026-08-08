import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';

import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';
import { DataSource } from '../config/data-source';
import { addDoc } from 'firebase/firestore';

export interface Imagen {
  id: number;
  img: string;
}

@Injectable({
  providedIn: 'root'
})
export class CarrucelService {


  async agregarCarrucel( 
    id: number,
    img: string) {
  
   const carrucelRef = collection(db, 'carrucel');
  
   await addDoc(carrucelRef, {
      id,
      img
    });
  
    alert('Producto guardado');
  
  }

   
    

  private baseUrl = 'http://localhost:3000';
  private cache: Imagen[] | null = null;

  constructor(private http: HttpClient) {}

  getCarrusel(): Observable<Imagen[]> {

    if (this.cache) {
      return of(this.cache);
    }

    // Datos locales
    if (!DataSource.firebase) {

      return this.http.get<Imagen[]>(`${this.baseUrl}/carrucel`).pipe(
        tap(data => this.cache = data)
      );

    }

    // Firebase
    return new Observable<Imagen[]>(observer => {

      getDocs(collection(db, 'carrucel'))
        .then(snapshot => {

          const imagenes = snapshot.docs.map(doc => ({
            ...doc.data()
          })) as Imagen[];

          this.cache = imagenes;

          observer.next(imagenes);
          observer.complete();

        })
        .catch(error => {
          console.error(error);
          observer.error(error);
        });

    });

  }

}
