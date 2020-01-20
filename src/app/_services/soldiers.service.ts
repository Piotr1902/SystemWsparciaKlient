import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Soldier } from '../_dtos/Soldier';

@Injectable({
  providedIn: 'root'
})
export class SoldiersService {

  baseUrl = 'http://localhost:5000/api/soldiers/';

  constructor(private http: HttpClient) { }

  getSoldiers(): Observable<Soldier[]> {
    return this.http.get<Soldier[]>(this.baseUrl + 'soldiers');
  }

}
