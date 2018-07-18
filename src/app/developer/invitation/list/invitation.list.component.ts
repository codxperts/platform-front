import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { Page } from '../../models/page';
import { Invitation } from '../../models/invitation';
import { InvitationService } from '../../services/invitation.service';
import { SearchSandboxService } from '../../services/searchSandbox.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Subscription, Subject, ReplaySubject } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  AppState,
  getInvitations,
  getInvitationsPage
} from '../../store/app.states';
import { SearchInvitations } from '../../store/actions/invitation.actions';

@Component({
  selector: 'app-invitation-list',
  templateUrl: './invitation.list.component.html',
  styleUrls: ['./invitation.list.component.scss']
})
export class InvitationListComponent implements OnInit {
  target = '/developer/invitations/list';

  invitations$: Observable<Array<Invitation>>;

  page$: Observable<Page> = this.store.select(state => state.Invitation.page);

  pageNumber$: Subject<number> = new ReplaySubject<number>();

  displayedColumns: string[] = [
    'email',
    'name',
    'created_at',
    'accepted',
    'info'
  ];

  getState: Observable<any>;
  pageNu$: Observable<any>;

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private store: Store<AppState>
  ) {
    this.getState = this.store.select(getInvitations);
  }

  ngOnInit() {
    const pageNumber$ = this.activeRoute.params
      .map(params => params.page)
      .do(pageNumber => this.checkPageNumber(pageNumber))
      .filter(pageNumber => pageNumber)
      .map(pageNumber => +pageNumber)
      .distinctUntilChanged()
      .do(pageNumber => this.pageNumber$.next(pageNumber));

    // this.invitations$ = this.searchSandbox.invitations$;

    const pageNumberChanged$ = Observable.combineLatest(
      this.pageNumber$,
      this.page$
    )
      .filter(
        ([pageNumber, page]) =>
          pageNumber !== null && (!page || page.number !== pageNumber)
      )
      .map(([pageNumber, page]) => (pageNumber ? pageNumber : 1))
      .distinctUntilChanged();

    this.store.dispatch(
      new SearchInvitations({ search: '', page: pageNumber$ })
    );

    this.invitations$ = this.store.select(getInvitations);

    this.page$ = Observable.combineLatest(
      pageNumber$,
      this.store.select(getInvitationsPage)
    )
      .do(([pageNumber, page]) => this.checkPageNumber(pageNumber, page))
      .map(([pageNumber, page]) => page);
  }

  private checkPageNumber(pageNumber: number, page?: Page) {
    if (!pageNumber || pageNumber < 1) {
      this.router.navigate([this.target, 1]);
    } else if (page && page.totalPages < pageNumber) {
      this.router.navigate([this.target, page.totalPages]);
    }
  }
}
