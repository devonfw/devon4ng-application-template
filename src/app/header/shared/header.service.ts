import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'app/core/security/auth.service';
import { BusinessOperationsService } from 'app/core/shared/business-operations.service';

@Injectable()
export class HeaderService {

    constructor(public router: Router,
                private BO: BusinessOperationsService,
                private http: HttpClient,
                public authService: AuthService) { }

    logout() {
        this.http
            .get(this.BO.logout())
            .subscribe( () => {
                this.authService.setLogged(false);
                this.authService.setToken('');
                this.router.navigate(['/login']);
            })
    }
}
