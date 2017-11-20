import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'app/core/security/auth.service';
import { BusinessOperationsService } from 'app/core/shared/business-operations.service';

@Injectable()
export class HeaderService {

    constructor(private BO: BusinessOperationsService,
                private http: HttpClient,) { }

    logout() {
        return this.http.get(this.BO.logout());
    }
}
