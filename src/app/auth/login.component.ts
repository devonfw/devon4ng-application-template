import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';
import { environment } from '../../environments/environment';
import { AuthService } from '../core/security/auth.service';
import { LoginService } from '../core/security/login.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private translocoService: TranslocoService,
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
          // CSRF
          if (environment.security === 'csrf') {
            this.loginService.getCsrf().subscribe((data: any) => {
              this.authService.setToken(data.token);
              this.authService.setLogged(true);
              this.router.navigate(['/home/initial']);
            });
          }

          // JWT
          if (environment.security === 'jwt') {
            this.authService.setToken(res.headers.get('Authorization'));
            this.authService.setLogged(true);
            this.router.navigate(['/home/initial']);
          }
        },
        (err: any) => {
          this.authService.setLogged(false);
          this.snackBar.open(
            this.translocoService.translate('login.errorMsg'),
            'OK',
            {
              duration: 5000,
            },
          );
        },
      );
  }
}
