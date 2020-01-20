import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IssueweaponsService {

  baseUrl = 'http://localhost:5000/api/issueweapon/';

  constructor(private http: HttpClient) { }

  wypisz(model: any) {
    return this.http.post(this.baseUrl + 'issueweapons', model);
  }

  wpisz(model: any, id: number) {
    return this.http.put(this.baseUrl + id, model);
  }

  getIssueWeapons() {
    return this.http.get(this.baseUrl + 'getAll');
  }

}
