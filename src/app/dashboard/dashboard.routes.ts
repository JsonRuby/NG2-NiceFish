import { RouterModule } from "@angular/router";
import { DashboardMainComponent } from './dashboard-main/dashboard-main.component';
import { LinechartComponent } from './linechart/linechart.component';

export const dashboardRoutes = [
	{
		path: '',
		component: DashboardMainComponent,
		children: [
			{ path: '', redirectTo: 'linechart', pathMatch: 'full' },
			{ path: 'linechart', component:  LinechartComponent },
			{ path: '**', redirectTo: 'linechart' }
		]
	}
];