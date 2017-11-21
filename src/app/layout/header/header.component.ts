import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from '../../core/security/auth.service';
import { HeaderService } from './shared/header.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent {
    constructor (public router: Router,
                private translate: TranslateService,
                private auth: AuthService,
                private headerService: HeaderService) {}

    toggleLanguage(option) {
        this.translate.use(option);
    }

    isCurrentLang(lang) {
        return this.translate.currentLang !== lang;
    }

    isLogged(): boolean {
        return this.auth.isLogged() || false;
    }

    logout() {
        this.headerService.logout()
        .subscribe( () => {
                this.auth.setLogged(false);
                this.auth.setToken('');
                this.router.navigate(['/login']);
            });
    }

}
