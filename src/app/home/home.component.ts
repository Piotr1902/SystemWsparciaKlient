import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  task: string;
  tasksList: Array<string> = [];

  constructor() { }

  ngOnInit() {
  }

  add() {
    this.tasksList.push(this.task);
    this.task = '';
  }

  remove(task: string) {
    this.tasksList = this.tasksList.filter(e => e !== task);
  }

}
