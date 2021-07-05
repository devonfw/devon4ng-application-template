import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BusinessOperationsService } from '../../core/shared/business-operations.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    public router: Router,
    private bo: BusinessOperationsService,
    private http: HttpClient,
  ) {}

  login(username: string, password: string): Observable<any> {
    let options: any;

    // CSRF
    if (environment.security === 'csrf') {
      options = {
        withCredentials: true,
        responseType: 'text',
      };
    }

    // JWT
    if (environment.security === 'jwt') {
      options = { observe: 'response' };
    }

    return this.http.post(
      this.bo.login(),
      {
        j_username: username,
        j_password: password,
      },
      options,
    );
  }

  logout(): Observable<string> {
    return this.http.get(this.bo.logout(), { responseType: 'text' });
  }

  getCsrf(): Observable<any> {
    return this.http.get(this.bo.getCsrf(), { withCredentials: true });
  }
}
