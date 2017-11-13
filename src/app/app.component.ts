import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  constructor(private router: Router,
      private translate: TranslateService,
      private iconReg: MatIconRegistry,
      private sanitizer: DomSanitizer) {
    // NGX Translate
    translate.setDefaultLang('en');
    translate.use('en');
    // Icon registered
    iconReg.addSvgIcon(
      'logo',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/Logo.svg')
    )
  }
}
