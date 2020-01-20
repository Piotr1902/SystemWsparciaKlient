import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Weapon } from '../_dtos/Weapon';

@Injectable({
  providedIn: 'root'
})
export class WeaponsService {
  baseUrl = 'http://localhost:5000/api/weapon/';

  constructor(private http: HttpClient) { }

  dodajBron(model: any) {
    return this.http.post(this.baseUrl + 'weapons', model);
  }

  edytujBron(model: any, id: number) {
    return this.http.put(this.baseUrl + id, model);
  }

  wyswietlBron() {
    return this.http.get(this.baseUrl + 'getAll');
  }

  usunBron(model: any, id: number) {
    return this.http.delete(this.baseUrl + id, model);
  }


}
