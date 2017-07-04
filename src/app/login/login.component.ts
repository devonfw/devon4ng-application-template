import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
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
        private iconReg: MdIconRegistry,
        private loginService: LoginService,
        private sanitizer: DomSanitizer,
        private router: Router) {
            iconReg.addSvgIcon('logo', sanitizer.bypassSecurityTrustResourceUrl('assets/img/Logo.svg'))
    }

    login(login) {
        this.loginService.login(login.value.username, login.value.password);
    }
}
