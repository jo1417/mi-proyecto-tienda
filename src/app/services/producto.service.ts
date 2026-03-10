import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private url = 'http://localhost:3000/productos';
  private cache: any[] | null = null;

  constructor(private http: HttpClient) {}

  getProductos(): Observable<any[]> {
    if (this.cache) {
      return of(this.cache);
    }

    

    return this.http.get<any[]>(this.url).pipe(
      tap(data => this.cache = data)
     
    );

    
  }


}
