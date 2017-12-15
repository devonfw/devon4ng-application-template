import { TranslateService } from '@ngx-translate/core';
import { ITdDataTableColumn } from '@covalent/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Injectable() export class SampleDataDataGridService {
    private urlService = environment.restServiceRoot + 'sampledatamanagement/v1/sampledata/';
    constructor(private http: HttpClient) {}
    getSampleData(size: number, page: number, searchTerms, sort: any[]) {
        const pageData = {
            pagination: {
                size: size,
                page: page,
                total: 1
            },
            name: searchTerms.name,
            surname: searchTerms.surname,
            age: searchTerms.age,
            mail: searchTerms.mail,
            sort: sort
        };
        return this.http.post < any > (this.urlService + 'search', pageData);
    }
    saveSampleData(data) {
        const obj = {
            id: data.id,
            name: data.name,
            surname: data.surname,
            age: data.age,
            mail: data.mail
        };
        return this.http.post(this.urlService, obj);
    }
    deleteSampleData(id) {
        return this.http.delete(this.urlService + id);
    }
    searchSampleData(criteria) {
        return this.http.post(this.urlService + 'search', {
            criteria: criteria
        });
    }
}
