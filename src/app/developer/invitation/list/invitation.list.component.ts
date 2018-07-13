import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { Page } from '../../models/page';
import { Invitation } from '../../models/invitation';
import { InvitationService } from '../../services/invitation.service';
import { SearchSandboxService } from '../../services/searchSandbox.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-invitation-list',
  templateUrl: './invitation.list.component.html',
  styleUrls: ['./invitation.list.component.scss']
})
export class InvitationListComponent implements OnInit {
  target = '/developer/invitations/list';
  invitations$: Observable<Array<Invitation>>;
  page$: Observable<Page>;
  displayedColumns: string[] = ['email', 'name', 'created_at', 'accepted', 'info'];

  @ViewChild('previousPaginator') previousPaginator: MatPaginator;

  previousSubscription: Subscription;

  constructor(private searchSandbox: SearchSandboxService,
              private router: Router,
              private activeRoute: ActivatedRoute) {
  }

  ngOnInit() {
    console.log('init');
    const pageNumber$ = this.activeRoute.params
      .map(params => params.page)
      .do(pageNumber => this.checkPageNumber(pageNumber))
      .filter(pageNumber => pageNumber)
      .map(pageNumber => +pageNumber)
      .distinctUntilChanged()
      .do(pageNumber => this.searchSandbox.pageNumber$.next(pageNumber));

    this.invitations$ = this.searchSandbox.invitations$;
    
    this.page$ = Observable.combineLatest(pageNumber$, this.searchSandbox.page$)
      .do(([ pageNumber, page ]) => this.checkPageNumber(pageNumber, page))
      .map(([ pageNumber, page ]) => page);

  }

  private checkPageNumber(pageNumber: number, page?: Page) {
    if (!pageNumber || pageNumber < 1) {
      this.router.navigate([ this.target, 1 ]);
    } else if (page && page.totalPages < pageNumber) {
      this.router.navigate([ this.target, page.totalPages ]);
    }
  }
}

