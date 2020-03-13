import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { SampleDataAlertComponent } from './sampledata-alert/sampledata-alert.component';
import { SampleDataDialogComponent } from './sampledata-dialog/sampledata-dialog.component';
import { SampleDataGridComponent } from './sampledata-grid/sampledata-grid.component';
import { SampleDataService } from './services/sampledata.service';

@NgModule({
  imports: [CommonModule, CoreModule],
  declarations: [
    SampleDataGridComponent,
    SampleDataDialogComponent,
    SampleDataAlertComponent,
  ],
  entryComponents: [SampleDataDialogComponent, SampleDataAlertComponent],
  providers: [SampleDataService],
})
export class SampleDataModule {}
