import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleDataDataGridService } from './services/sample-data.service';
import { SampleDataGridComponent } from './sample-data-grid/sample-data-grid.component';
import { SampleDataDialogComponent } from './sample-data-dialog/sample-data-dialog.component';
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
  providers: [
    SampleDataDataGridService
  ]
})
export class SampleDataModule { }
