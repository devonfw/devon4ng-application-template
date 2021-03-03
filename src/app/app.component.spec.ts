import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, CoreModule],
      declarations: [AppComponent],
    }).compileComponents();
  }));
  it('should create the app', waitForAsync(() => {
    const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(
      AppComponent,
    );
    const app: any = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
