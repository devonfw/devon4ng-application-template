import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { SearchCriteria } from '../../core/interfaces/search-criteria';

@Injectable({
  providedIn: 'root',
})
export class SampleDataService {
  private urlService: string =
    environment.restServiceRoot + 'sampledatamanagement/v1/sampledata/';
  constructor(private http: HttpClient) {}
  getSampleData(
    size: number,
    page: number,
    searchTerms: any,
    sort: any[],
  ): Observable<any> {
    const searchCriteria: SearchCriteria = {
      pageable: {
        pageSize: size,
        pageNumber: page,
        sort,
      },
      name: searchTerms.name,
      surname: searchTerms.surname,
      age: searchTerms.age,
      email: searchTerms.email,
    };
    return this.http.post<any>(this.urlService + 'search', searchCriteria);
  }

  saveSampleData(data: any): Observable<unknown> {
    const obj: any = {
      id: data.id,
      modificationCounter: data.modificationCounter,
      name: data.name,
      surname: data.surname,
      age: data.age,
      email: data.email,
    };
    return this.http.post(this.urlService, obj);
  }
  deleteSampleData(id: number): Observable<unknown> {
    return this.http.delete(this.urlService + id);
  }
  searchSampleData(criteria: any): Observable<unknown> {
    return this.http.post(this.urlService + 'search', {
      criteria,
    });
  }
}
