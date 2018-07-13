import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Invitation } from '../models/invitation';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class DeveloperService {

  private BASE_URL = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  InviteToFriend(email: string, user: string): Observable<any> {
    const url = `${this.BASE_URL}/developer/invite`;
    return this.http.post<Invitation>(url, {email, user}, httpOptions);
  }
}
const httpOptions = {	  
  headers: new HttpHeaders({
    'Content-Type':  'application/json;charset=utf-8',
    // 'Authorization': 'my-auth-token'
  })
};
