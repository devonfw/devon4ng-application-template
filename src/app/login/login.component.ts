import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../core/security/auth.service';
import { LoginService } from '../core/security/login.service';

@Component({
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor(
    private translate: TranslateService,
    private loginService: LoginService,
    public authService: AuthService,
    private router: Router,
    public snackBar: MatSnackBar,
  ) {}

  login(login: any): void {
    this.loginService
      .login(login.value.username, login.value.password)
      .subscribe(
        (res: any) => {
          this.loginService.getCsrf().subscribe((data: any) => {
            this.authService.setToken(data.token);
            this.authService.setLogged(true);
            this.router.navigate(['/home']);
          });
        },
        (err: any) => {
          this.authService.setLogged(false);
          this.translate.get('login.errorMsg').subscribe((res: string) => {
            this.snackBar.open(res, 'OK', {
              duration: 5000,
            });
          });
        },
      );
  }
}
