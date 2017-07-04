import { Router } from '@angular/router';
import { Injectable }     from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AuthService } from '../../shared/security/auth.service';
import { HttpClient } from '../../shared/security/httpClient.service';
import { BusinessOperations } from '../../BusinessOperations';

@Injectable()
export class LoginService {

    constructor(public router: Router,
                private BO: BusinessOperations,
                private http: HttpClient,
                public authService: AuthService) { }

    login(username: string, password: string): void {
        this.http.post(this.BO.login(), JSON.stringify({j_username: username, j_password: password}))
            .map(res => JSON.stringify(res))
            .subscribe((res: any) => {
                this.http.get(this.BO.getCsrf())
                    .map(result => result.json())
                    .subscribe( (data) => {
                        this.authService.setToken(data.token);
                        this.authService.setLogged(true);
                        this.router.navigate(['/home']);
                    });
            }, (err: any) => {
                this.authService.setLogged(false);
            });
    }
}
