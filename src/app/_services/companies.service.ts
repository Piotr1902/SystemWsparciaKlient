import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Company } from '../_dtos/Company';


@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  baseUrl = 'http://localhost:5000/api/companies/';

  constructor(private http: HttpClient) { }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.baseUrl + 'all');
  }

}
