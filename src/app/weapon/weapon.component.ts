import { Component, OnInit } from '@angular/core';
import { WeaponsService } from '../_services/weapons.service';
import { AlertifyService } from '../_services/alertify.service';
import { SoldiersService } from '../_services/soldiers.service';
import { Soldier } from '../_dtos/Soldier';
import { Weapon } from '../_dtos/Weapon';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-weapon',
  templateUrl: './weapon.component.html',
  styleUrls: ['./weapon.component.css']
})
export class WeaponComponent implements OnInit {
  model: any = {};
  soldiers: Soldier[];
  weapons: Weapon[];
  baseUrl = 'http://localhost:5000/api/weapon/';

  constructor(private weaponsService: WeaponsService, private alertifyService: AlertifyService
    ,         private soldiersService: SoldiersService) { }

  ngOnInit() {
    this.soldiersService.getSoldiers().subscribe((soldiers: Soldier[]) => {
      this.soldiers = soldiers;
    });

    this.weaponsService.wyswietlBron().subscribe((weapon: Weapon[]) => {
      this.weapons = weapon;
    });

  }

  dodajBron() {
    this.weaponsService.dodajBron(this.model).subscribe(next => {
      this.alertifyService.success('Dodano broń pomyślnie');
      this.weaponsService.wyswietlBron().subscribe((weapon: Weapon[]) => {
        this.weapons = weapon;
      });
      this.model = {};
    }, error => {
      this.alertifyService.error(error);
    });
  }

  edytujBron(id: number) {
    this.weaponsService.edytujBron(this.model, id).subscribe(next => {
      this.alertifyService.success('Zaktualizowano broń pomyślnie');
      this.model.soldierId = '';
      this.weaponsService.wyswietlBron().subscribe((weapons: Weapon[]) => {
        this.weapons = weapons;
      });
    }, error => {
      this.alertifyService.error(error);
    });
  }

  usunBron(id: number) {
    this.weaponsService.usunBron(this.model, id).subscribe(next => {
      this.alertifyService.success('Usunięto broń pomyślnie');
      this.weaponsService.wyswietlBron().subscribe((weapon: Weapon[]) => {
        this.weapons = weapon;
      });
    }, error => {
     // this.alertifyService.error(error);
    });
  }


  anuluj() {
    this.alertifyService.success('Anulowano dodawanie broni');
    this.model = {};
  }

}
