import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { TranslateModule } from '@ngx-translate/core';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, CoreModule, TranslateModule.forRoot()],
      declarations: [AppComponent],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(
      AppComponent,
    );
    const app: any = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
