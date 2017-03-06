import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { dashboardRoutes } from './dashboard.routes';
import { DashboardMainComponent } from './dashboard-main/dashboard-main.component';
import { LinechartComponent } from './linechart/linechart.component';
import { ChartMapComponent } from "./chart-map/chart-map.component";
import { ChartNormalComponent } from "./chart-normal/chart-normal.component";
import { Ng2EchartsDirective } from "../utils/directive/ng2-echarts.directive";

@NgModule({
  declarations: [
    DashboardMainComponent,
    LinechartComponent,
    ChartNormalComponent,
    ChartMapComponent,
    Ng2EchartsDirective
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutes)
  ],
  exports: [
    DashboardMainComponent
  ],
  providers: [
  ]
})
export class DashboardModule { }
