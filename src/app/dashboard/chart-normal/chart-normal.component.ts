import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
declare var echarts: any;

@Component({
  selector: 'app-chart',
  templateUrl: './chart-normal.component.html',
  styleUrls: ['./chart-normal.component.scss'],
})
export class ChartNormalComponent implements OnInit {
  private chartData = {
    theme: '',
    event: [
      {
        type: 'click',
        cb: function (res) {
          console.log(res);
        }
      }
    ],
    title: {
      text: 'NiceFish访问用户地区分布',
      subtext: '纯属虚构',
      x: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['深圳', '北京', '广州', '上海', '长沙']
    },
    series: [{
      name: '访问来源',
      type: 'pie',
      startAngle: -180,
      radius: '55%',
      center: ['50%', '60%'],
      data: [{
        value: 3350,
        name: '深圳'
      }, {
        value: 310,
        name: '北京'
      }, {
        value: 234,
        name: '广州'
      }, {
        value: 135,
        name: '上海'
      }, {
        value: 1548,
        name: '长沙'
      }],
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }]
  };

  chartData2 = {
    title: {
      text: 'NiceFish月访问量统计',
      subtext: '纯属虚构',
      x: 'center'
    },
    color: ['#3398DB'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      },
      formatter: '{b}月{a}:{c}'
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: '访问量',
        type: 'bar',
        barWidth: '60%',
        data: [10, 52, 200, 334, 390, 330, 220, 1000, 500, 444, 999, 11]
      }
    ]
  };
  chartData3 = {
    title: {
      text: 'NiceFish月访问趋势图',
      subtext: '纯属虚构',
      x: 'center'
    },
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value} 次'
      }
    },
    series: [
      {
        name: '访问量',
        type: 'line',
        data: [11, 11, 15, 13, 12, 13, 10, 123, 100, 99, 66, 199]
      }

    ]
  };


  private xAxisData = ['a', 'b', 'c', 'd', 'e'];
  private data1 = [-1, 4, 3, -5, 6];
  private data2 = [5, -5, -8, 1, 5];

  chartData4 = {
    title: {
      text: '柱状图动画延迟'
    },
    legend: {
      data: ['bar', 'bar2'],
      align: 'left'
    },
    toolbox: {
      // y: 'bottom',
      feature: {
        magicType: {
          type: ['stack', 'tiled']
        },
        dataView: {},
        saveAsImage: {
          pixelRatio: 2
        }
      }
    },
    tooltip: {},
    xAxis: {
      data: this.xAxisData,
      silent: false,
      splitLine: {
        show: false
      }
    },
    yAxis: {
    },
    series: [{
      name: 'bar',
      type: 'bar',
      data: this.data1,
      animationDelay: function (idx) {
        return idx * 10;
      }
    }, {
      name: 'bar2',
      type: 'bar',
      data: this.data2,
      animationDelay: function (idx) {
        return idx * 10 + 100;
      }
    }],
    animationEasing: 'elasticOut',
    animationDelayUpdate: function (idx) {
      return idx * 5;
    }
  };



  private labelRight = {
    normal: {
      position: 'right'
    }
  };
  chartData5 = {
    title: {
      text: '交错正负轴标签',
      subtext: 'From ExcelHome',
      sublink: 'http://e.weibo.com/1341556070/AjwF2AgQm'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      top: 80,
      bottom: 30
    },
    xAxis: {
      type: 'value',
      position: 'top',
      splitLine: { lineStyle: { type: 'dashed' } },
    },
    yAxis: {
      type: 'category',
      axisLine: { show: false },
      axisLabel: { show: false },
      axisTick: { show: false },
      splitLine: { show: false },
      data: ['ten', 'nine', 'eight', 'seven', 'six', 'five', 'four', 'three', 'two', 'one']
    },
    series: [
      {
        name: '生活费',
        type: 'bar',
        stack: '总量',
        label: {
          normal: {
            show: true,
            formatter: '{b}'
          }
        },
        data: [
          { value: -0.07, label: this.labelRight },
          { value: -0.09, label: this.labelRight },
          0.2, 0.44,
          { value: -0.23, label: this.labelRight },
          0.08,
          { value: -0.17, label: this.labelRight },
          0.47,
          { value: -0.36, label: this.labelRight },
          0.18
        ]
      }
    ]
  };



  chartData6 = {
    title: {
      text: 'Graph 简单示例'
    },
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [
      {
        type: 'graph',
        layout: 'none',
        symbolSize: 50,
        roam: true,
        label: {
          normal: {
            show: true
          }
        },
        edgeSymbol: ['circle', 'arrow'],
        edgeSymbolSize: [4, 10],
        edgeLabel: {
          normal: {
            textStyle: {
              fontSize: 20
            }
          }
        },
        data: [{
          name: '节点1',
          x: 300,
          y: 300
        }, {
          name: '节点2',
          x: 800,
          y: 300
        }, {
          name: '节点3',
          x: 550,
          y: 100
        }, {
          name: '节点4',
          x: 550,
          y: 500
        }],
        // links: [],
        links: [{
          source: 0,
          target: 1,
          symbolSize: [5, 20],
          label: {
            normal: {
              show: true
            }
          },
          lineStyle: {
            normal: {
              width: 5,
              curveness: 0.2
            }
          }
        }, {
          source: '节点2',
          target: '节点1',
          label: {
            normal: {
              show: true
            }
          },
          lineStyle: {
            normal: { curveness: 0.2 }
          }
        }, {
          source: '节点1',
          target: '节点3'
        }, {
          source: '节点2',
          target: '节点3'
        }, {
          source: '节点2',
          target: '节点4'
        }, {
          source: '节点1',
          target: '节点4'
        }],
        lineStyle: {
          normal: {
            opacity: 0.9,
            width: 2,
            curveness: 0
          }
        }
      }
    ]
  };


  private data7 = {
    'nodes': [
      { 'name': 'Agricultural \'waste\'' },
      { 'name': 'Bio-conversion' },
      { 'name': 'Liquid' },
      { 'name': 'Losses' },
      { 'name': 'Solid' },
      { 'name': 'Gas' },
      { 'name': 'Biofuel imports' },
      { 'name': 'Biomass imports' },
      { 'name': 'Coal imports' },
      { 'name': 'Coal' },
      { 'name': 'Coal reserves' },
      { 'name': 'District heating' },
      { 'name': 'Industry' },
      { 'name': 'Heating and cooling - commercial' },
      { 'name': 'Heating and cooling - homes' },
      { 'name': 'Electricity grid' },
      { 'name': 'Over generation / exports' },
      { 'name': 'H2 conversion' },
      { 'name': 'Road transport' },
      { 'name': 'Agriculture' },
      { 'name': 'Rail transport' },
      { 'name': 'Lighting & appliances - commercial' },
      { 'name': 'Lighting & appliances - homes' },
      { 'name': 'Gas imports' },
      { 'name': 'Ngas' },
      { 'name': 'Gas reserves' },
      { 'name': 'Thermal generation' },
      { 'name': 'Geothermal' },
      { 'name': 'H2' },
      { 'name': 'Hydro' },
      { 'name': 'International shipping' },
      { 'name': 'Domestic aviation' },
      { 'name': 'International aviation' },
      { 'name': 'National navigation' },
      { 'name': 'Marine algae' },
      { 'name': 'Nuclear' },
      { 'name': 'Oil imports' },
      { 'name': 'Oil' },
      { 'name': 'Oil reserves' },
      { 'name': 'Other waste' },
      { 'name': 'Pumped heat' },
      { 'name': 'Solar PV' },
      { 'name': 'Solar Thermal' },
      { 'name': 'Solar' },
      { 'name': 'Tidal' },
      { 'name': 'UK land based bioenergy' },
      { 'name': 'Wave' },
      { 'name': 'Wind' }
    ],
    'links': [
      { 'source': 'Agricultural \'waste\'', 'target': 'Bio-conversion', 'value': 124.729 },
      { 'source': 'Bio-conversion', 'target': 'Liquid', 'value': 0.597 },
      { 'source': 'Bio-conversion', 'target': 'Losses', 'value': 26.862 },
      { 'source': 'Bio-conversion', 'target': 'Solid', 'value': 280.322 },
      { 'source': 'Bio-conversion', 'target': 'Gas', 'value': 81.144 },
      { 'source': 'Biofuel imports', 'target': 'Liquid', 'value': 35 },
      { 'source': 'Biomass imports', 'target': 'Solid', 'value': 35 },
      { 'source': 'Coal imports', 'target': 'Coal', 'value': 11.606 },
      { 'source': 'Coal reserves', 'target': 'Coal', 'value': 63.965 },
      { 'source': 'Coal', 'target': 'Solid', 'value': 75.571 },
      { 'source': 'District heating', 'target': 'Industry', 'value': 10.639 },
      { 'source': 'District heating', 'target': 'Heating and cooling - commercial', 'value': 22.505 },
      { 'source': 'District heating', 'target': 'Heating and cooling - homes', 'value': 46.184 },
      { 'source': 'Electricity grid', 'target': 'Over generation / exports', 'value': 104.453 },
      { 'source': 'Electricity grid', 'target': 'Heating and cooling - homes', 'value': 113.726 },
      { 'source': 'Electricity grid', 'target': 'H2 conversion', 'value': 27.14 },
      { 'source': 'Electricity grid', 'target': 'Industry', 'value': 342.165 },
      { 'source': 'Electricity grid', 'target': 'Road transport', 'value': 37.797 },
      { 'source': 'Electricity grid', 'target': 'Agriculture', 'value': 4.412 },
      { 'source': 'Electricity grid', 'target': 'Heating and cooling - commercial', 'value': 40.858 },
      { 'source': 'Electricity grid', 'target': 'Losses', 'value': 56.691 },
      { 'source': 'Electricity grid', 'target': 'Rail transport', 'value': 7.863 },
      { 'source': 'Electricity grid', 'target': 'Lighting & appliances - commercial', 'value': 90.008 },
      { 'source': 'Electricity grid', 'target': 'Lighting & appliances - homes', 'value': 93.494 },
      { 'source': 'Gas imports', 'target': 'Ngas', 'value': 40.719 },
      { 'source': 'Gas reserves', 'target': 'Ngas', 'value': 82.233 },
      { 'source': 'Gas', 'target': 'Heating and cooling - commercial', 'value': 0.129 },
      { 'source': 'Gas', 'target': 'Losses', 'value': 1.401 },
      { 'source': 'Gas', 'target': 'Thermal generation', 'value': 151.891 },
      { 'source': 'Gas', 'target': 'Agriculture', 'value': 2.096 },
      { 'source': 'Gas', 'target': 'Industry', 'value': 48.58 },
      { 'source': 'Geothermal', 'target': 'Electricity grid', 'value': 7.013 },
      { 'source': 'H2 conversion', 'target': 'H2', 'value': 20.897 },
      { 'source': 'H2 conversion', 'target': 'Losses', 'value': 6.242 },
      { 'source': 'H2', 'target': 'Road transport', 'value': 20.897 },
      { 'source': 'Hydro', 'target': 'Electricity grid', 'value': 6.995 },
      { 'source': 'Liquid', 'target': 'Industry', 'value': 121.066 },
      { 'source': 'Liquid', 'target': 'International shipping', 'value': 128.69 },
      { 'source': 'Liquid', 'target': 'Road transport', 'value': 135.835 },
      { 'source': 'Liquid', 'target': 'Domestic aviation', 'value': 14.458 },
      { 'source': 'Liquid', 'target': 'International aviation', 'value': 206.267 },
      { 'source': 'Liquid', 'target': 'Agriculture', 'value': 3.64 },
      { 'source': 'Liquid', 'target': 'National navigation', 'value': 33.218 },
      { 'source': 'Liquid', 'target': 'Rail transport', 'value': 4.413 },
      { 'source': 'Marine algae', 'target': 'Bio-conversion', 'value': 4.375 },
      { 'source': 'Ngas', 'target': 'Gas', 'value': 122.952 },
      { 'source': 'Nuclear', 'target': 'Thermal generation', 'value': 839.978 },
      { 'source': 'Oil imports', 'target': 'Oil', 'value': 504.287 },
      { 'source': 'Oil reserves', 'target': 'Oil', 'value': 107.703 },
      { 'source': 'Oil', 'target': 'Liquid', 'value': 611.99 },
      { 'source': 'Other waste', 'target': 'Solid', 'value': 56.587 },
      { 'source': 'Other waste', 'target': 'Bio-conversion', 'value': 77.81 },
      { 'source': 'Pumped heat', 'target': 'Heating and cooling - homes', 'value': 193.026 },
      { 'source': 'Pumped heat', 'target': 'Heating and cooling - commercial', 'value': 70.672 },
      { 'source': 'Solar PV', 'target': 'Electricity grid', 'value': 59.901 },
      { 'source': 'Solar Thermal', 'target': 'Heating and cooling - homes', 'value': 19.263 },
      { 'source': 'Solar', 'target': 'Solar Thermal', 'value': 19.263 },
      { 'source': 'Solar', 'target': 'Solar PV', 'value': 59.901 },
      { 'source': 'Solid', 'target': 'Agriculture', 'value': 0.882 },
      { 'source': 'Solid', 'target': 'Thermal generation', 'value': 400.12 },
      { 'source': 'Solid', 'target': 'Industry', 'value': 46.477 },
      { 'source': 'Thermal generation', 'target': 'Electricity grid', 'value': 525.531 },
      { 'source': 'Thermal generation', 'target': 'Losses', 'value': 787.129 },
      { 'source': 'Thermal generation', 'target': 'District heating', 'value': 79.329 },
      { 'source': 'Tidal', 'target': 'Electricity grid', 'value': 9.452 },
      { 'source': 'UK land based bioenergy', 'target': 'Bio-conversion', 'value': 182.01 },
      { 'source': 'Wave', 'target': 'Electricity grid', 'value': 19.013 },
      { 'source': 'Wind', 'target': 'Electricity grid', 'value': 289.366 }
    ]
  };


  chartData7 = {
    title: {
      text: 'Sankey Diagram'
    },
    tooltip: {
      trigger: 'item',
      triggerOn: 'mousemove'
    },
    series: [
      {
        type: 'sankey',
        layout: 'none',
        data: this.data7.nodes,
        links: this.data7.links,
        itemStyle: {
          normal: {
            borderWidth: 1,
            borderColor: '#aaa'
          }
        },
        lineStyle: {
          normal: {
            color: 'source',
            curveness: 0.5
          }
        }
      }
    ]
  };

private dataBJ = [
    [1,55,9,56,0.46,18,6,"良"],
    [2,25,11,21,0.65,34,9,"优"],
    [3,56,7,63,0.3,14,5,"良"],
    [4,33,7,29,0.33,16,6,"优"],
    [5,42,24,44,0.76,40,16,"优"],
    [6,82,58,90,1.77,68,33,"良"],
    [7,74,49,77,1.46,48,27,"良"],
    [8,78,55,80,1.29,59,29,"良"],
    [9,267,216,280,4.8,108,64,"重度污染"],
    [10,185,127,216,2.52,61,27,"中度污染"],
    [11,39,19,38,0.57,31,15,"优"],
    [12,41,11,40,0.43,21,7,"优"],
    [13,64,38,74,1.04,46,22,"良"],
    [14,108,79,120,1.7,75,41,"轻度污染"],
    [15,108,63,116,1.48,44,26,"轻度污染"],
    [16,33,6,29,0.34,13,5,"优"],
    [17,94,66,110,1.54,62,31,"良"],
    [18,186,142,192,3.88,93,79,"中度污染"],
    [19,57,31,54,0.96,32,14,"良"],
    [20,22,8,17,0.48,23,10,"优"],
    [21,39,15,36,0.61,29,13,"优"],
    [22,94,69,114,2.08 ,73,39,"良"],
    [23,99,73,110,2.43,76,48,"良"],
    [24,31,12,30,0.5,32,16,"优"],
    [25,42,27,43,1,53,22,"优"],
    [26,154,117,157,3.05,92,58,"中度污染"],
    [27,234,185,230,4.09,123,69,"重度污染"],
    [28,160,120,186,2.77,91,50,"中度污染"],
    [29,134,96,165,2.76,83,41,"轻度污染"],
    [30,52,24,60,1.03,50,21,"良"],
    [31,46,5,49,0.28,10,6,"优"]
];

private dataGZ = [
    [1,26,37,27,1.163,27,13,"优"],
    [2,85,62,71,1.195,60,8,"良"],
    [3,78,38,74,1.363,37,7,"良"],
    [4,21,21,36,0.634,40,9,"优"],
    [5,41,42,46,0.915,81,13,"优"],
    [6,56,52,69,1.067,92,16,"良"],
    [7,64,30,28,0.924,51,2,"良"],
    [8,55,48,74,1.236,75,26,"良"],
    [9,76,85,113,1.237,114,27,"良"],
    [10,91,81,104,1.041,56,40,"良"],
    [11,84,39,60,0.964,25,11,"良"],
    [12,64,51,101,0.862,58,23,"良"],
    [13,70,69,120,1.198,65,36,"良"],
    [14,77,105,178,2.549,64,16,"良"],
    [15,109,68,87,0.996,74,29,"轻度污染"],
    [16,73,68,97,0.905,51,34,"良"],
    [17,54,27,47,0.592,53,12,"良"],
    [18,51,61,97,0.811,65,19,"良"],
    [19,91,71,121,1.374,43,18,"良"],
    [20,73,102,182,2.787,44,19,"良"],
    [21,73,50,76,0.717,31,20,"良"],
    [22,84,94,140,2.238,68,18,"良"],
    [23,93,77,104,1.165,53,7,"良"],
    [24,99,130,227,3.97,55,15,"良"],
    [25,146,84,139,1.094,40,17,"轻度污染"],
    [26,113,108,137,1.481,48,15,"轻度污染"],
    [27,81,48,62,1.619,26,3,"良"],
    [28,56,48,68,1.336,37,9,"良"],
    [29,82,92,174,3.29,0,13,"良"],
    [30,106,116,188,3.628,101,16,"轻度污染"],
    [31,118,50,0,1.383,76,11,"轻度污染"]
];

private dataSH = [
    [1,91,45,125,0.82,34,23,"良"],
    [2,65,27,78,0.86,45,29,"良"],
    [3,83,60,84,1.09,73,27,"良"],
    [4,109,81,121,1.28,68,51,"轻度污染"],
    [5,106,77,114,1.07,55,51,"轻度污染"],
    [6,109,81,121,1.28,68,51,"轻度污染"],
    [7,106,77,114,1.07,55,51,"轻度污染"],
    [8,89,65,78,0.86,51,26,"良"],
    [9,53,33,47,0.64,50,17,"良"],
    [10,80,55,80,1.01,75,24,"良"],
    [11,117,81,124,1.03,45,24,"轻度污染"],
    [12,99,71,142,1.1,62,42,"良"],
    [13,95,69,130,1.28,74,50,"良"],
    [14,116,87,131,1.47,84,40,"轻度污染"],
    [15,108,80,121,1.3,85,37,"轻度污染"],
    [16,134,83,167,1.16,57,43,"轻度污染"],
    [17,79,43,107,1.05,59,37,"良"],
    [18,71,46,89,0.86,64,25,"良"],
    [19,97,71,113,1.17,88,31,"良"],
    [20,84,57,91,0.85,55,31,"良"],
    [21,87,63,101,0.9,56,41,"良"],
    [22,104,77,119,1.09,73,48,"轻度污染"],
    [23,87,62,100,1,72,28,"良"],
    [24,168,128,172,1.49,97,56,"中度污染"],
    [25,65,45,51,0.74,39,17,"良"],
    [26,39,24,38,0.61,47,17,"优"],
    [27,39,24,39,0.59,50,19,"优"],
    [28,93,68,96,1.05,79,29,"良"],
    [29,188,143,197,1.66,99,51,"中度污染"],
    [30,174,131,174,1.55,108,50,"中度污染"],
    [31,187,143,201,1.39,89,53,"中度污染"]
];

private schema = [
    {name: 'date', index: 0, text: '日'},
    {name: 'AQIindex', index: 1, text: 'AQI指数'},
    {name: 'PM25', index: 2, text: 'PM2.5'},
    {name: 'PM10', index: 3, text: 'PM10'},
    {name: 'CO', index: 4, text: '一氧化碳（CO）'},
    {name: 'NO2', index: 5, text: '二氧化氮（NO2）'},
    {name: 'SO2', index: 6, text: '二氧化硫（SO2）'}
];


private itemStyle = {
    normal: {
        opacity: 0.8,
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
    }
};

chartData8 = {
  backgroundColor: '#404a59',
    color: [
        '#dd4444', '#fec42c', '#80F1BE'
    ],
    legend: {
        y: 'top',
        data: ['北京', '上海', '广州'],
        textStyle: {
            color: '#fff',
            fontSize: 16
        }
    },
    grid: {
        x: '10%',
        x2: 150,
        y: '18%',
        y2: '10%'
    },
    tooltip: {
        padding: 10,
        backgroundColor: '#222',
        borderColor: '#777',
        borderWidth: 1,
        formatter: function (obj) {
            let value = obj.value;
            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                + obj.seriesName + ' ' + value[0] + '日：'
                + value[7]
                + '</div>'
                + this.schema[1].text + '：' + value[1] + '<br>'
                + this.schema[2].text + '：' + value[2] + '<br>'
                + this.schema[3].text + '：' + value[3] + '<br>'
                + this.schema[4].text + '：' + value[4] + '<br>'
                + this.schema[5].text + '：' + value[5] + '<br>'
                + this.schema[6].text + '：' + value[6] + '<br>';
        }
    },
    xAxis: {
        type: 'value',
        name: '日期',
        nameGap: 16,
        nameTextStyle: {
            color: '#fff',
            fontSize: 14
        },
        max: 31,
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#eee'
            }
        }
    },
    yAxis: {
        type: 'value',
        name: 'AQI指数',
        nameLocation: 'end',
        nameGap: 20,
        nameTextStyle: {
            color: '#fff',
            fontSize: 16
        },
        axisLine: {
            lineStyle: {
                color: '#eee'
            }
        },
        splitLine: {
            show: false
        }
    },
    visualMap: [
        {
            left: 'right',
            top: '10%',
            dimension: 2,
            min: 0,
            max: 250,
            itemWidth: 30,
            itemHeight: 120,
            calculable: true,
            precision: 0.1,
            text: ['圆形大小：PM2.5'],
            textGap: 30,
            textStyle: {
                color: '#fff'
            },
            inRange: {
                symbolSize: [10, 70]
            },
            outOfRange: {
                symbolSize: [10, 70],
                color: ['rgba(255,255,255,.2)']
            },
            controller: {
                inRange: {
                    color: ['#c23531']
                },
                outOfRange: {
                    color: ['#444']
                }
            }
        },
        {
            left: 'right',
            bottom: '5%',
            dimension: 6,
            min: 0,
            max: 50,
            itemHeight: 120,
            calculable: true,
            precision: 0.1,
            text: ['明暗：二氧化硫'],
            textGap: 30,
            textStyle: {
                color: '#fff'
            },
            inRange: {
                colorLightness: [1, 0.5]
            },
            outOfRange: {
                color: ['rgba(255,255,255,.2)']
            },
            controller: {
                inRange: {
                    color: ['#c23531']
                },
                outOfRange: {
                    color: ['#444']
                }
            }
        }
    ],
    series: [
        {
            name: '北京',
            type: 'scatter',
            itemStyle: this.itemStyle,
            data: this.dataBJ
        },
        {
            name: '上海',
            type: 'scatter',
            itemStyle: this.itemStyle,
            data: this.dataSH
        },
        {
            name: '广州',
            type: 'scatter',
            itemStyle: this.itemStyle,
            data: this.dataGZ
        }
    ]
};

  constructor() { }

  ngOnInit() {

  }

}
