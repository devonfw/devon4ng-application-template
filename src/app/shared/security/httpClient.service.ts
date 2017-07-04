import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AuthService } from './auth.service';
import { BusinessOperations } from '../../BusinessOperations';

@Injectable()
export class HttpClient {

    private headers: Headers;

    constructor(private router: Router,
                private auth: AuthService,
                private BO: BusinessOperations,
                private http: Http) {
      this.headers = new Headers();
      this.headers.append('Content-Type',  'application/json');
    }

    setHeaderToken(name, value) {
        this.headers.delete(name);
        this.headers.append(name, value);
    }

    get(url: string): Observable<any> {
        return new Observable((observer: any) => {
            this.setHeaderToken('x-csrf-token', this.auth.getToken());
            this.http.get(url, {withCredentials: true, headers: this.headers})
                .subscribe( (data: any) => {
                    return observer.next(data);
                }, (error: any) => {
                    if (error.status === 400 || error.status === 500) {
                        this.auth.setLogged(false);;
                        this.headers.delete('x-csrf-token');
                        this.router.navigate(['/login']);
                    }
                    return observer.error(error);
            });
        });
    }

    post(url: string, data: any): Observable<any> {
        return new Observable((observer: any) => {
            this.setHeaderToken('x-csrf-token', this.auth.getToken());
            this.http.post(url, data, {withCredentials: true, headers: this.headers})
                .subscribe( (res: any) => {
                    return observer.next(res);
                }, (error: any) => {
                    if (error.status === 400 || error.status === 500) {
                        this.auth.setLogged(false);;
                        this.headers.delete('x-csrf-token');
                        this.router.navigate(['/login']);
                    }
                    return observer.error(error);
            });
        });
    }

    delete(url: string): Observable<any> {
        return new Observable((observer: any) => {
            this.setHeaderToken('x-csrf-token', this.auth.getToken());
            this.http.delete(url, {withCredentials: true, headers: this.headers})
                .subscribe( (data: any) => {
                    return observer.next(data);
                }, (error: any) => {
                    if (error.status === 400 || error.status === 500) {
                        this.auth.setLogged(false);;
                        this.headers.delete('x-csrf-token');
                        this.router.navigate(['/login']);
                    }
                    return observer.error(error);
            });
        });
    }
}
