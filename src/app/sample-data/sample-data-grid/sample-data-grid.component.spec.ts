import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleDataGridComponent } from './sample-data-grid.component';

describe('SampleDataGridComponent', () => {
  let component: SampleDataGridComponent;
  let fixture: ComponentFixture<SampleDataGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleDataGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleDataGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
