import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TdDialogService } from '@covalent/core/dialogs/services/dialog.service';
import { LoginService } from './shared/login.service';

@Component({
    templateUrl: './login.component.html'
})

export class LoginComponent {

    constructor (
        private translate: TranslateService,
        private _dialogService: TdDialogService,
        private loginService: LoginService,
        private router: Router) {}

    login(login) {
        this.loginService.login(login.value.username, login.value.password);
    }
}
