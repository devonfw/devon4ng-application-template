import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { url } from '../assets/serverPath';

@Injectable()
export class BusinessOperations {

    public serverPath = url;
    public servicesPath = this.serverPath;

    constructor(private http: Http) { }

    login() {
        return this.serverPath + 'login';
    }
    logout() {
        return this.serverPath + 'logout';
    }
    getCsrf() {
        return this.serverPath + 'security/v1/csrftoken';
    }
}

