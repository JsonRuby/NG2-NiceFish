import { RouterModule } from "@angular/router";
import { DashboardMainComponent } from './dashboard-main/dashboard-main.component';
import { LinechartComponent } from './linechart/linechart.component';
import { ChartNormalComponent } from "./chart-normal/chart-normal.component";
import { ChartMapComponent } from "./chart-map/chart-map.component";

export const dashboardRoutes = [
	{
		path: '',
		component: DashboardMainComponent,
		children: [
			{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },
			{ path: 'normal', component: ChartNormalComponent },
			{ path: 'map', component: ChartMapComponent },
			{ path: 'line', component: LinechartComponent },
			{ path: '**', component: ChartNormalComponent }
		]
	}
];