import { TestBed, inject } from '@angular/core/testing';

import { SampleDataService } from './sampledata.service';

import { CoreModule } from '../../core/core.module';

describe('SidenavSharedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SampleDataService,
      ],
      imports: [
        CoreModule,
      ],
    });
  });

  it('should create', inject([SampleDataService], (service: SampleDataService) => {
    expect(service).toBeTruthy();
  }));
});
