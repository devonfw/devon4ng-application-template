import { TranslateService } from '@ngx-translate/core';
import { ITdDataTableColumn } from '@covalent/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable()
export class SampleDataDataGridService {
  private urlService = environment.restServiceRoot + 'sampledata/';

  constructor(private http: HttpClient) {}

  getData(size: number, page: number, searchTerms, sort: any[]) {
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

    return this.http.post(this.urlService + 'search', pageData);
  }

  saveData(data) {
    const obj = {
      id: data.id,
      name: data.name,
      surname: data.surname,
      age: data.age,
      mail: data.mail
    };

    return this.http.post(this.urlService, obj);
  }

  deleteData(id) {
    return this.http.delete(this.urlService + id);
  }

  searchData(criteria) {
    return this.http.post(this.urlService + 'search', { criteria: criteria });
  }

}
