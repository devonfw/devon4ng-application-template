import { Component } from '@angular/core';
import { AuthService } from '../core/security/auth.service';
import { HeaderService } from './shared/header.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {

    constructor (
        private translate: TranslateService,
        private auth: AuthService,
        private headerService: HeaderService) {}

    toggleLanguage(option) {
        this.translate.use(option);
    }

    isCurrentLang(lang) {
        return this.translate.currentLang !== lang;
    }

    logout() {
        this.headerService.logout();
    }

}
