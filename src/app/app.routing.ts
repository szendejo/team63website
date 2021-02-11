import { Routes, RouterModule } from '@angular/router';

import { CaseStudyComponent } from './case-study/case-study.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
    { path: 'case-study', component: CaseStudyComponent },
    { path: 'dashboard', component: DashboardComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: 'case-study' }
];

export const appRoutingModule = RouterModule.forRoot(routes);