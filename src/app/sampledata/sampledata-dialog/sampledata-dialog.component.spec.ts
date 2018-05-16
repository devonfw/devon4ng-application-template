import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { async, TestBed } from '@angular/core/testing';
import { CoreModule } from '../../core/core.module';
import { SampleDataModule } from '../sampledata.module';

import { SampleDataService } from '../services/sampledata.service';
import { SampleDataDialogComponent } from './sampledata-dialog.component';
import { MatDialog } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';

describe('SampleDataDialogComponent', () => {
  let component: SampleDataDialogComponent;
  let dialog: MatDialog;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [SampleDataService, HttpClient],
      imports: [
        BrowserAnimationsModule,
        TranslateModule.forRoot(),
        SampleDataModule,
        HttpClientModule,
        CoreModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    dialog = TestBed.get(MatDialog);
    component = dialog.open(SampleDataDialogComponent).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
