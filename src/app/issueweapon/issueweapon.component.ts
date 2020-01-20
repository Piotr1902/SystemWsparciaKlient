import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../_services/alertify.service';
import { DatePipe } from '@angular/common';
import { IssueWeapon } from '../_dtos/IssueWeapon';
import { WeaponsService } from '../_services/weapons.service';
import { Weapon } from '../_dtos/Weapon';
import { IssueweaponsService } from '../_services/issueweapons.service';

@Component({
  selector: 'app-issueweapon',
  templateUrl: './issueweapon.component.html',
  styleUrls: ['./issueweapon.component.css'],
  providers: [DatePipe]
})
export class IssueweaponComponent implements OnInit {
  model: any = {};
  issueweapons: IssueWeapon[];
  weapons: Weapon[];
  date: Date;
  date1: string;

  // tslint:disable-next-line: max-line-length
  constructor(private issueWeaponService: IssueweaponsService, private alertify: AlertifyService, private datePipe: DatePipe, private weaponsService: WeaponsService) { }

  ngOnInit() {
    this.weaponsService.wyswietlBron().subscribe((weapons: Weapon[]) => {
      this.weapons = weapons;
    });

    this.issueWeaponService.getIssueWeapons().subscribe((issueweapons: IssueWeapon[]) => {
      this.issueweapons = issueweapons;
    });

    this.date = new Date();
    this.date1 = this.datePipe.transform(this.date, 'yyyy-MM-ddTHH:mm:ss');
  }

  wypisz() {
    this.issueWeaponService.wypisz(this.model).subscribe(next => {
      this.alertify.success('Wypisano broń pomyślnie');
      this.issueWeaponService.getIssueWeapons().subscribe((issueweapons: IssueWeapon[]) => {
        this.issueweapons = issueweapons;
      });
      this.model = {};
    }, error => {
      this.alertify.error(error);
    });
  }

  wpisz(id: number) {
    this.aktualnaData1();
    this.issueWeaponService.wpisz(this.model, id).subscribe(next => {
      this.alertify.success('Zaktualizowano pomyślnie');
      this.model.stan = '';
      this.issueWeaponService.getIssueWeapons().subscribe((issueweapons: IssueWeapon[]) => {
        this.issueweapons = issueweapons;
      });
    }, error => {
      this.alertify.error(error);
    });
  }

  anuluj() {
    this.model = {};
  }

  aktualnaData() {
    this.date = new Date();
    this.date1 = this.datePipe.transform(this.date, 'yyyy-MM-ddTHH:mm:ss');
    this.model.dateIssue = this.date1;
  }

  aktualnaData1() {
    this.date = new Date();
    this.date1 = this.datePipe.transform(this.date, 'yyyy-MM-ddTHH:mm:ss');
    this.model.dateReturn = this.date1;
  }

}
