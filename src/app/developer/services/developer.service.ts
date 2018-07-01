import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class DeveloperService {

  private BASE_URL = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  
}
const httpOptions = {	  
  headers: new HttpHeaders({
    'Content-Type':  'application/json;charset=utf-8',
    // 'Authorization': 'my-auth-token'
  })
};
