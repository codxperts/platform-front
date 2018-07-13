import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Page } from '../models/page';
import { Invitation } from '../models/invitation';
import { Subject } from 'rxjs/Subject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { InvitationService } from './invitation.service';
import { AppState } from '../store/app.states';
import { Store } from '@ngrx/store';
import { SetSearch } from '../store/actions/search.actions';

@Injectable()
export class SearchSandboxService {
  invitations$: Observable<Array<Invitation>>;
  page$: Observable<Page> = this.store.select(state => state.search.page);
  pageNumber$: Subject<number> = new ReplaySubject<number>();

  constructor(private searchService: InvitationService,
              private store: Store<AppState>) {

    const pageNumberChanged$ = Observable.combineLatest(this.pageNumber$, this.page$)
      .filter(([ pageNumber, page ]) => pageNumber !== null && ( !page || page.number !== pageNumber))
      .map(([ pageNumber, page ]) => pageNumber ? pageNumber : 1)
      .distinctUntilChanged();

    this.invitations$ = pageNumberChanged$
      .switchMap(page => this.searchService.searchForMovie('james bond', page))
      .do(response => {
        console.info(response);
        this.store.dispatch(new SetSearch(response.invitations, response.page));
      })
      .map(result => result.invitations)
      .merge(this.store.select(state => state.search.invitations));
  }
}