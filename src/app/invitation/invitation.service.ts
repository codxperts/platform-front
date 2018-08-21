import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

import { Page } from '../shared/pagination/entities/page.entity';
import { Invitation } from './entities/invitation.entity';

export interface Search {
  page: Page;
  invitations: any[];
}

export interface SearchResult {
  page: number;
  total_results: number;
  total_pages: number;
  results: any[];
}

const searchQuery = '/api/developer/invitation';

// @Injectable()
// export class InvitationService {

//   constructor(private httpClient: HttpClient) {
//   }

//   paginate(name: string, page: number = 1): Observable<Search> {
//     //If no page is provided default the first will be taken
//     return this.httpClient.get<any>(`${searchQuery}`, {
//       params: {
//         query: name,
//         page: `${page}`
//       }
//     });
//   }

//   searchForInvitations(name: string, page: number = 1): Observable<Search> {
//     //If no page is provided default the first will be taken
//     return this.httpClient.get<SearchResult>(`${searchQuery}`, {
//       params: {
//         query: name,
//         page: `${page}`
//       }
//     })
//       .map(result => ({
//         invitations: result.results,
//         page: {
//           //Transform the data to our Page type
//           size: result.results.length,
//           totalElements: result.total_results,
//           totalPages: result.total_pages,
//           number: result.page
//         }
//       }));
//   }
// }

@Injectable()
export class InvitationService {
  constructor(private http: HttpClient) {}

  paginate(page: number = 1, pageSize: number = 20): Observable<any> {
    //If no page is provided default the first will be taken
    return this.http.get<any>(`${searchQuery}`, {
      params: {
        page: `${page}`,
        pageSize: `${pageSize}`
      }
    });
  }

  inviteToFriend(email: string, user: string): Observable<any> {
    const url = '/api/developer/invitation';
    return this.http.post<Invitation>(url, { email, user });
  }
}
