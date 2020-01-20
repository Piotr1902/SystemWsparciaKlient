import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

import { CompaniesService } from '../_services/companies.service';
import { Company } from '../_dtos/Company';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  companies: Company[];

  constructor(private authService: AuthService, private companiesService: CompaniesService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.companiesService.getCompanies().subscribe((companies: Company[]) => {
      this.companies = companies;
    });
  }

  register() {
    this.authService.register(this.model).subscribe(next => {
      this.alertify.success('Zarejestrowano pomyślnie');
      this.model = {};
    }, error => {
      this.alertify.error(error);
    }) ;
  }

}

