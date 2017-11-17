import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TdDialogService } from '@covalent/core/dialogs/services/dialog.service';
import { AuthService } from 'app/core/security/auth.service';
import { LoginService } from './shared/login.service';

@Component({
    templateUrl: './login.component.html'
})

export class LoginComponent {

    constructor(
        private translate: TranslateService,
        private _dialogService: TdDialogService,
        private loginService: LoginService,
        public authService: AuthService,
        private router: Router) { }

    login(login) {
        this.loginService.login(login.value.username, login.value.password)
        .subscribe(() => {
            this.authService.setLogged(true);
            this.router.navigate(['/home']);
            // this.loginService.getCsrf()
            //     .subscribe((data) => {
            //         this.authService.setToken(data.token);
            //     });
        }, (err: any) => {
            this.authService.setLogged(false);
        });
    }
}
