import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { TranslateModule } from '@ngx-translate/core';

import { SampleDataService } from './services/sampledata.service';

import { SampleDataGridComponent } from './sampledata-grid/sampledata-grid.component';
import { SampleDataDialogComponent } from './sampledata-dialog/sampledata-dialog.component';

@NgModule({
  imports: [CommonModule, CoreModule, TranslateModule],
  declarations: [SampleDataGridComponent, SampleDataDialogComponent],
  entryComponents: [SampleDataDialogComponent],
  providers: [SampleDataService],
})
export class SampleDataModule {}
