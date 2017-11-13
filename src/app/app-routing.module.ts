import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AuthGuard } from './core/security/auth-guard.service';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent,
        canActivate: [AuthGuard],
        children: [{
                path: '',
                redirectTo: '/home/initialPage',
                pathMatch: 'full',
                canActivate: [AuthGuard]
            },
            {
                path: 'initialPage',
                component: InitialPageComponent,
                canActivate: [AuthGuard]
            },
            // {
            //    path: 'etonamecomponentdataGrid',
            //    component: EtonamecomponentDataGridComponent,
            //    canActivate: [AuthGuard]
            // }
        ]
    },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', redirectTo: '/login' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true }, // <-- debugging purposes only
        ),
    ],
    exports: [
        RouterModule,
    ],
})
export class AppRoutingModule { }

