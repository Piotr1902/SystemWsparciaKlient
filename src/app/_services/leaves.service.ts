import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, asapScheduler } from 'rxjs';
import { Leave } from '../_dtos/Leave';
import { idLocale } from 'ngx-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class LeavesService {
  baseUrl = 'http://localhost:5000/api/leave/';

  constructor(private http: HttpClient) { }

  wypisz(model: any) {
    return this.http.post(this.baseUrl + 'leaves', model);
  }

  wpisz(model: any, id: number) {
    return this.http.put(this.baseUrl + id, model);
  }

  getLeaves() {
    return this.http.get(this.baseUrl + 'getAll');
  }

}


