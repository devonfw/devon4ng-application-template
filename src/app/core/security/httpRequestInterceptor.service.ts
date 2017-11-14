import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpResponse,
    HttpErrorResponse,
} from '@angular/common/http';
import 'rxjs/add/operator/catch';

import { AuthService } from './auth.service';

@Injectable()
export class HttpRequestInterceptorService implements HttpInterceptor {
    constructor(private auth: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Get the auth header from the service.
        const authHeader: string = this.auth.getToken();
        if (authHeader) {
            const authReq: HttpRequest<any> = req.clone({ setHeaders: { 'x-csrf-token': authHeader } });
            return next.handle(authReq);
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
