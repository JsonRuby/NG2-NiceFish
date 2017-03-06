import { chartRoutes } from './chart.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(chartRoutes)
  ],
  exports: [
  ]
})
export class ChartModule { }
