import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, Subject, ReplaySubject } from 'rxjs';
import { Page } from '../../shared/pagination/entities/page.entity';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../reducers';
import {
  page,
  selectInvitationState,
  invitations,
  isLoading
} from '../invitation.selectors';
import { RequestInvitations } from '../invitation.actions';
import { Router, ActivatedRoute } from '@angular/router';
import { MatPaginator } from '@angular/material';
import { LayoutService } from '../../layout/layout.service';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  inviations$: Observable<any[]>;

  page$: Observable<Page>;

  pageNumber$: Subject<number> = new ReplaySubject<number>();

  pageNumberChanged$: Observable<any>;

  isLoading$: Observable<boolean>;

  displayedColumns: string[] = [
    'email',
    'name',
    'created_at',
    'accepted',
    'info'
  ];

  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  target = '/invitations';

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.page$ = this.store.pipe(select(page));

    this.page$.subscribe(value => {
      this.paginator.length = value.totalElements;
      if (this.paginator.pageIndex !== value.number) {
        this.paginator.pageIndex = value.number;
      }
      if (this.paginator.pageSize !== value.size) {
        this.paginator.pageSize = value.size;
      }
    });

    this.route.params.subscribe(params => {
      this.store.dispatch(
        new RequestInvitations({
          page: parseInt(params.page) | 0,
          pageSize: this.route.snapshot.queryParams['pageSize']
        })
      );
    });

    this.inviations$ = this.store.pipe(select(invitations));

    this.isLoading$ = this.store.pipe(select(isLoading));
  }

  handle(page) {
    console.log(page);
    this.router.navigate(['/invitations/', page.pageIndex], {
      queryParams: { pageSize: page.pageSize }
    });
  }
}
