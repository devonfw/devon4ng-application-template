import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TranslocoService, AvailableLangs } from '@ngneat/transloco';
import { AuthService } from '../../core/security/auth.service';
import { LoginService } from '../../core/security/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() sideNavOpened = false;
  @Output() toggle: EventEmitter<any> = new EventEmitter();
  currentLanguage: string;
  langs: AvailableLangs;

  constructor(
    public router: Router,
    private translocoService: TranslocoService,
    private auth: AuthService,
    private loginService: LoginService,
  ) {
    this.langs = translocoService.getAvailableLangs();
    translocoService.langChanges$.subscribe(
      (lang) => (this.currentLanguage = lang),
    );
  }

  toggleSideNav(): void {
    this.sideNavOpened = !this.sideNavOpened;
    this.toggle.emit(this.sideNavOpened);
  }

  toggleLanguage(option: string): void {
    this.translocoService.setActiveLang(option);
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
