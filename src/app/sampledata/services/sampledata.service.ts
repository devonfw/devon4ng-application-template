import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { PageData } from '../../core/interfaces/page-data';

@Injectable()
export class SampleDataService {
  private urlService: string = environment.restServiceRoot +
  'sampledatamanagement/v1/sampledata/';
  constructor(private http: HttpClient) {}
  getSampleData(
    size: number,
    page: number,
    searchTerms: any,
    sort: any[],
  ): Observable<any> {
    const pageData: PageData = {
      pagination: {
        size: size,
        page: page,
        total: 1,
      },
      name: searchTerms.name,
      surname: searchTerms.surname,
      age: searchTerms.age,
      mail: searchTerms.mail,
      sort: sort,
    };
    return this.http.post<any>(this.urlService + 'search', pageData);
  }

  saveSampleData(data: any): Observable<Object> {
    const obj: any = {
      id: data.id,
      name: data.name,
      surname: data.surname,
      age: data.age,
      mail: data.mail,
    };
    return this.http.post(this.urlService, obj);
  }
  deleteSampleData(id: number): Observable<Object> {
    return this.http.delete(this.urlService + id);
  }
  searchSampleData(criteria: any): Observable<Object> {
    return this.http.post(this.urlService + 'search', {
      criteria: criteria,
    });
  }
}
