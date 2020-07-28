import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { SampleDataAlertComponent } from './sampledata-alert/sampledata-alert.component';
import { SampleDataDialogComponent } from './sampledata-dialog/sampledata-dialog.component';
import { SampleDataGridComponent } from './sampledata-grid/sampledata-grid.component';
import { SampleDataRoutingModule } from './sampledata-routing.module';

@NgModule({
  imports: [CommonModule, CoreModule, SampleDataRoutingModule],
  declarations: [
    SampleDataGridComponent,
    SampleDataDialogComponent,
    SampleDataAlertComponent,
  ],
  providers: [],
})
export class SampleDataModule {}
