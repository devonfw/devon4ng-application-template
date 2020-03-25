import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SampleDataGridComponent } from './sampledata-grid/sampledata-grid.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: SampleDataGridComponent,
  },
];
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class SampleDataRoutingModule {}
