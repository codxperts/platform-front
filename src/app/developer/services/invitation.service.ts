import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Invitation } from '../models/invitation';
import { queryPaginated } from '../../shared/pagination/pagination-queryPaginated';
import { SearchResult } from '../models/search.result';
import { Search } from '../models/search';
import { Page } from '../models/page';
//import { SearchService } from '../service/search.service';
import { AppState } from '../store/app.states';
import { Store } from '@ngrx/store';
import { SetSearch } from '../store/actions/search.actions';

@Injectable({
  providedIn: 'root'
})
export class InvitationService {
  private BASE_URL = 'http://127.0.0.1:8000/api/developer';

  constructor(private http: HttpClient) {
  }

  InviteToFriend(email: string, user: string): Observable<any> {
    const url = `${this.BASE_URL}/invitation`;
    return this.http.post<Invitation>(url, {email, user}, httpOptions);
  }

  // list(urlOrFilter?: string | object): Observable<Page<Invitation>> {
  //   return queryPaginated<Invitation>(this.http, `${this.BASE_URL}/invitation`, urlOrFilter);
  // }


  searchForMovie(name: string, page: number = 1): Observable<Search> {
    //If no page is provided default the first will be taken
    return this.http.get<SearchResult>(`${this.BASE_URL}/invitation`, {
      params: {
        query: name,
        page: `${page}`
      }
    })
      .map(result => ({
        invitations: result.data,
        page: {
          size: result.data.length,
          totalElements: result.meta.total,
          totalPages: result.meta.last_page,
          number: result.meta.current_page,
          from: result.meta.from,
          to: result.meta.to,
        }
      }));
  }
  
}

const httpOptions = {	  
  headers: new HttpHeaders({
    'Content-Type':  'application/json;charset=utf-8',
    // 'Authorization': 'my-auth-token'
  })
};