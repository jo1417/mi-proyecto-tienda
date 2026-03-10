import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PromoService {

  constructor(private http: HttpClient) {}

  getPromo() {
    return this.http.get<any>('assets/db-promo.json');
  }
}

