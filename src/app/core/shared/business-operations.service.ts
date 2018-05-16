import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable()
export class BusinessOperationsService {
  public serverPath: string = environment.restServiceRoot;
  public restPath: string = environment.restPathRoot;

  login(): string {
    return this.serverPath + 'login';
  }
  logout(): string {
    return this.serverPath + 'logout';
  }
  getCsrf(): string {
    return this.serverPath + 'security/v1/csrftoken';
  }
}
