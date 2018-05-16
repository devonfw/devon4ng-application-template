import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CoreModule } from '../../core/core.module';
import { TranslateModule } from '@ngx-translate/core';

import { SampleDataService } from '../services/sampledata.service';

import { SampleDataGridComponent } from './sampledata-grid.component';

describe('SampleDataGridComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, CoreModule, TranslateModule.forRoot()],
      declarations: [SampleDataGridComponent],
      providers: [SampleDataService],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture: ComponentFixture<
      SampleDataGridComponent
    > = TestBed.createComponent(SampleDataGridComponent);
    const app: any = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
