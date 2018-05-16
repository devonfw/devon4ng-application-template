import { Router } from '@angular/router';
import { Component, EventEmitter, Output, Input } from '@angular/core';
import { AuthService } from '../../core/security/auth.service';
import { TranslateService } from '@ngx-translate/core';
import { LoginService } from '../../core/security/login.service';

@Component({
  selector: 'public-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() sideNavOpened: boolean = false;
  @Output() toggle: EventEmitter<any> = new EventEmitter();

  constructor(
    public router: Router,
    private translate: TranslateService,
    private auth: AuthService,
    private loginService: LoginService,
  ) {}

  toggleSideNav(): void {
    this.sideNavOpened = !this.sideNavOpened;
    this.toggle.emit(this.sideNavOpened);
  }

  toggleLanguage(option: string): void {
    this.translate.use(option);
  }

  isCurrentLang(lang: string): boolean {
    return this.translate.currentLang !== lang;
  }

  isLogged(): boolean {
    return this.auth.isLogged() || false;
  }

  logout(): void {
    this.loginService.logout().subscribe(
      () => {
        this.auth.setLogged(false);
        this.auth.setToken('');
        this.router.navigate(['/login']);
      },
      (err: any) => {
        // Logout error. Exiting anyway...
        this.auth.setLogged(false);
        this.auth.setToken('');
        this.router.navigate(['/login']);
      },
    );
  }
}
