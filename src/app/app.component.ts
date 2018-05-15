import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'public-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(
    public router: Router,
    public translate: TranslateService,
    public iconReg: MatIconRegistry,
    public sanitizer: DomSanitizer,
  ) {
    // NGX Translate
    translate.setDefaultLang('en');
    translate.use('en');
    // Icon registered
    iconReg.addSvgIcon(
      'logo',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/Logo.svg'),
    );
  }
}
