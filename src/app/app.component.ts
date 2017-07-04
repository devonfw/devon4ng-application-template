import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {

  constructor(private router: Router,
              private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }
}
