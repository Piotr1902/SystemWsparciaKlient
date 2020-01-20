import { Component, OnInit } from '@angular/core';
import { SoldiersService } from '../_services/soldiers.service';
import { AlertifyService } from '../_services/alertify.service';
import { Soldier } from '../_dtos/Soldier';
import { LeavesService } from '../_services/leaves.service';
import { Leave } from '../_dtos/Leave';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css'],
  providers: [DatePipe]
})
export class LeaveComponent implements OnInit {
  model: any = {};
  soldiers: Soldier[];
  leaves: Leave[];
  date: Date;
  date1: string;
  types = ['Przepustka jednorazowa',  'Przepustka stała', 'Izba chorych', 'Inne'];


  constructor(private leavesService: LeavesService, private soldiersService: SoldiersService
    ,         private alertify: AlertifyService, private datePipe: DatePipe) {}

  ngOnInit() {
    this.soldiersService.getSoldiers().subscribe((soldiers: Soldier[]) => {
      this.soldiers = soldiers;
    });

    this.leavesService.getLeaves().subscribe((leaves: Leave[]) => {
      this.leaves = leaves;
    });
    this.date = new Date();
    this.date1 = this.datePipe.transform(this.date, 'yyyy-MM-ddTHH:mm:ss');

  }

  wypisz() {
    this.leavesService.wypisz(this.model).subscribe(next => {
      this.alertify.success('Wypisano pomyślnie');
      this.leavesService.getLeaves().subscribe((leaves: Leave[]) => {
        this.leaves = leaves;
      });
      this.model = {};
    }, error => {
      this.alertify.error(error);
    });
  }

  wpisz(id: number) {
    this.aktualnaData1();
    this.leavesService.wpisz(this.model, id).subscribe(next => {
      this.alertify.success('Zaktualizowano pomyślnie');
      this.model.annotation = '';
      this.leavesService.getLeaves().subscribe((leaves: Leave[]) => {
        this.leaves = leaves;
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
    this.model.dateLeave = this.date1;
  }

  aktualnaData1() {
    this.date = new Date();
    this.date1 = this.datePipe.transform(this.date, 'yyyy-MM-ddTHH:mm:ss');
    this.model.dateReturn = this.date1;
  }


}
