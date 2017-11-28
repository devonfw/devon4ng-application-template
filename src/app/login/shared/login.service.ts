import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { BusinessOperationsService } from '../../core/shared/business-operations.service';

@Injectable()
export class LoginService {

    constructor(public router: Router,
                private BO: BusinessOperationsService,
                private http: Http,
                private httpClient: HttpClient) { }

    login(username: string, password: string): Observable<any> {
        return this.http.post(this.BO.login(),
            { j_username: username, j_password: password },
            { withCredentials: true }
        );
    }

    getCsrf(): Observable<any> {
        return this.httpClient.get(this.BO.getCsrf());
    }
}
