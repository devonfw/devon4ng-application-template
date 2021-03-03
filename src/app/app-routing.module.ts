import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/security/auth-guard.service';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./auth/auth.module').then(m => m.AuthDataModule),
  },
  {
    path: 'home',
    component: NavBarComponent,
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'initial',
        loadChildren: () =>
          import('./home/initial-page/initial-page.module').then(
            m => m.InitialPageModule,
          ),
      },
      {
        path: 'sampleData',
        loadChildren: () =>
          import('./sampledata/sampledata.module').then(
            m => m.SampleDataModule,
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/login',
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
