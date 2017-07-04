import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/security/auth-guard.service';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [{
        path: 'login',
        component: LoginComponent,
    }, {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard],
        children: [{
                path: '', redirectTo: '/home/initialPage', pathMatch: 'full', canActivate: [AuthGuard],
            }, {
                path: 'initialPage',
                component: InitialPageComponent,
                canActivate: [AuthGuard],
            }]
    },{
        path: '**',
        redirectTo: '/login',
        pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(appRoutes)
