import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleDataAlertComponent } from './sampledata-alert.component';

describe('SampleDataAlertComponent', () => {
  let component: SampleDataAlertComponent;
  let fixture: ComponentFixture<SampleDataAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleDataAlertComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleDataAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
