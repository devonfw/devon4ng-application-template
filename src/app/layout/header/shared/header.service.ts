import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BusinessOperationsService } from '../../../core/shared/business-operations.service';

@Injectable()
export class HeaderService {
    opened: boolean;
    constructor(private BO: BusinessOperationsService,
                private http: HttpClient) { }

    logout() {
        return this.http.get(this.BO.logout());
    }
}
