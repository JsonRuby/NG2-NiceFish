import { Component, OnInit } from '@angular/core';
import { flyIn } from '../../animations/fly-in';

@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.scss'],
    animations: [
    flyIn
  ]
})
export class DashboardMainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
