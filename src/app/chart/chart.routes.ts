import { ChartMainComponent } from './components/chart-main/chart-main.component';
import { ChartNormalComponent } from './components/chart-normal/chart-normal.component';
import { ChartMapComponent } from './components/chart-map/chart-map.component';


export const chartRoutes = [
    {
        path: 'echart',
        component: ChartMainComponent,
        children: [
            { path: '', redirectTo: 'chart/normal', pathMatch: 'full' },
            { path: 'normal', component: ChartNormalComponent },
            { path: 'map', component: ChartMapComponent }
        ]
    }
];


