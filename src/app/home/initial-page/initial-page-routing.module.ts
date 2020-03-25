import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialPageComponent } from './initial-page.component';

const routes: Routes = [
  {
    path: '',
    component: InitialPageComponent,
  },
];
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class InitialPageRoutingModule {}
