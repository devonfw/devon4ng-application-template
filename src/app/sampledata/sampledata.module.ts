import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleDataDataGridService } from './services/sampledata.service';
import { SampleDataGridComponent } from './sampledata-grid/sampledata-grid.component';
import { SampleDataDialogComponent } from './sampledata-dialog/sampledata-dialog.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
  ],
  declarations: [
    SampleDataGridComponent,
    SampleDataDialogComponent
  ],
  entryComponents: [
    SampleDataDialogComponent,
  ],
  providers: [
    SampleDataDataGridService
  ]
})
export class SampleDataModule { }
