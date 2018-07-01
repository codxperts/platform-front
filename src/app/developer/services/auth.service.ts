import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class AuthService {

  private BASE_URL = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  getToken(): string {
    return localStorage.getItem('token');
  }

  logIn(email: string, password: string): Observable<any> {
    const url = `${this.BASE_URL}/auth/login`;
    return this.http.post<User>(url, {email, password}, httpOptions);
  }

  signUp(email: string, password: string): Observable<User> {
    const url = `${this.BASE_URL}/auth/register`;
    return this.http.post<User>(url, {email, password}, httpOptions);
  }

  getStatus(): Observable<User> {
    const url = `${this.BASE_URL}/status`;
    return this.http.get<User>(url);
  }
}
const httpOptions = {	  
  headers: new HttpHeaders({
    'Content-Type':  'application/json;charset=utf-8',
    // 'Authorization': 'my-auth-token'
  })
};
