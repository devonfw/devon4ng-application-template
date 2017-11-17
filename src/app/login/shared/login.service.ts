import { Router } from '@angular/router';
import { Injectable }     from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { BusinessOperationsService } from 'app/core/shared/business-operations.service';

@Injectable()
export class LoginService {

    constructor(public router: Router,
                private BO: BusinessOperationsService,
                private http: HttpClient) { }

    login(username: string, password: string): Observable<any> {
        // tslint:disable-next-line:max-line-length
        return this.http.post(this.BO.login(), {j_username: username, j_password: password});
    }

    getCsrf(): Observable<any> {
        return this.http.get(this.BO.getCsrf());

    }
}
