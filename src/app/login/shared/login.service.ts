import { Router } from '@angular/router';
import { Injectable }     from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { AuthService } from 'app/core/security/auth.service';
import { BusinessOperationsService } from 'app/core/shared/business-operations.service';

@Injectable()
export class LoginService {

    constructor(public router: Router,
                private BO: BusinessOperationsService,
                private http: HttpClient,
                public authService: AuthService) { }

    login(username: string, password: string): void {
        this.http.post(this.BO.login(), JSON.stringify({j_username: username, j_password: password}))
            .map(res => JSON.stringify(res))
            .subscribe((res: any) => {
                this.http.get<any>(this.BO.getCsrf())
                    .subscribe((data) => {
                        this.authService.setToken(data.token);
                        this.authService.setLogged(true);
                        this.router.navigate(['/home']);
                    });
            }, (err: any) => {
                this.authService.setLogged(false);
            });
    }
}
