import { Component, OnInit } from '@angular/core';
import { flyIn } from '../../../animations/fly-in';

@Component({
  selector: 'app-chart-main',
  templateUrl: './chart-main.component.html',
  styleUrls: ['./chart-main.component.scss'],
  animations: [
    flyIn
  ]
})
export class ChartMainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onActivate(component) {
    console.log('组件加载完成>' + component);
  }

  onDeactivate(component) {
    console.log('组件已经移除>' + component);
  }
}
