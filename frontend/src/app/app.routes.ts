import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthPageComponent } from './auth-page/auth-page.component';
export const routes: Routes = [
    {
        path: 'home',
        component: DashboardComponent,
    },
    {
        path: 'login',
        component: AuthPageComponent,
    }
];
