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
        this.headers.append('Content-Type',  'application/json');
    }

    setHeaderToken(name, value) {
        this.headers.delete(name);
        this.headers.append(name, value);
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Get the auth header from the service.
        const authHeader: string = this.auth.getToken();
        if (authHeader) {
            this.setHeaderToken('x-csrf-token', authHeader);
            const authReq: HttpRequest<any> = req.clone({withCredentials: true, headers: this.headers});

            next.handle(authReq).subscribe((data: any) => {
                    console.log(data)
                    return Observable.of(data);
                }, (error: any) => {
                    if (error.status === 400 || error.status === 500) {
                        this.auth.setLogged(false);
                        this.headers.delete('x-csrf-token');
                        this.router.navigate(['/login']);
                    }
                    return Observable.throw(error);
            });
        } else {
                return next.handle(req)
                    .catch((err: HttpErrorResponse) => {
                        if (err.status >= 200 && err.status < 300) {
                            const res = new HttpResponse({
                                body: null,
                                headers: err.headers,
                                status: err.status,
                                statusText: err.statusText,
                                url: err.url
                            });
                            return Observable.of(res);
                        } else {
                            return Observable.throw(err);
                        }
                    });
        }
    }
}
