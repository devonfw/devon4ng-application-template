import { TestBed, ComponentFixture, waitForAsync } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { CoreModule } from '../../core/core.module';

import { SampleDataService } from '../services/sampledata.service';
import { SampleDataGridComponent } from './sampledata-grid.component';

describe('SampleDataGridComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, RouterTestingModule, CoreModule],
      declarations: [SampleDataGridComponent],
      providers: [SampleDataService],
    }).compileComponents();
  }));
  it('should create the app', waitForAsync(() => {
    const fixture: ComponentFixture<
      SampleDataGridComponent
    > = TestBed.createComponent(SampleDataGridComponent);
    const app: any = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
