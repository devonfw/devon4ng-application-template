import { Router } from '@angular/router';
import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpHeaders,
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
} from '@angular/common/http';
import 'rxjs/add/operator/catch';

import { AuthService } from './auth.service';

@Injectable()
export class HttpRequestInterceptorService implements HttpInterceptor {

    private headers: HttpHeaders;

    constructor(private router: Router,
                private auth: AuthService) {
        this.headers = new HttpHeaders();
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Get the auth header from the service.
        const authHeader: string = this.auth.getToken();
        if (authHeader) {
            const authReq: HttpRequest<any> = req.clone({
                withCredentials: true,
                setHeaders: { 'x-csrf-token': authHeader }
            });

            return next.handle(authReq);
        } else {
            return next.handle(req);
        }
    }
}
