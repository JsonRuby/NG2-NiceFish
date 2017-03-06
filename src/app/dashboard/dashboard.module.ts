import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { dashboardRoutes } from './dashboard.routes';
import { DashboardMainComponent } from './dashboard-main/dashboard-main.component';
import { LinechartComponent } from './linechart/linechart.component';

@NgModule({
  declarations: [
    DashboardMainComponent,
    LinechartComponent
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
