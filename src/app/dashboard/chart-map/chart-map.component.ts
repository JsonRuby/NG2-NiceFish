import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
declare var echarts: any;

@Component({
  selector: 'app-chart-map',
  templateUrl: './chart-map.component.html',
  styleUrls: ['./chart-map.component.scss']
})
export class ChartMapComponent implements OnInit {


  private option={
    tooltip: {
        trigger: 'item',
        formatter: '{b}'
    },
    series: [
        {
            name: '中国',
            type: 'map',
            mapType: 'china',
            selectedMode : 'multiple',
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            data:[
                {name:'广东', selected:true}
            ]
        }
    ]
};

  constructor() {
    





  }

  ngOnInit() {
  }



}
