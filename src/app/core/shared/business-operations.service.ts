import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable()
export class BusinessOperationsService {

    public serverPath = environment.restServiceRoot;
    public restPath = environment.restPathRoot;

    constructor() { }

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

