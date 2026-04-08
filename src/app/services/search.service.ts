import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  //  Estado global del texto de búsqueda
  private searchSubject = new BehaviorSubject<string>('');

  //  Observable para escuchar cambios en otros componentes
  search$ = this.searchSubject.asObservable();

  //  Método para enviar texto desde cualquier componente
  setSearch(texto: string) {
    this.searchSubject.next(texto);
  }

  //  Método para obtener el valor actual sin suscribirse
  getSearch(): string {
    return this.searchSubject.getValue();
  }
}




