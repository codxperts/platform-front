import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { Store } from '@ngrx/store';

import { LayoutService } from '../layout.service';
import { GetStatus, LogOut } from '../../developer/store/actions/auth.actions';
import { AppState, selectAuthState } from '../../developer/store/app.states';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-developer-layout',
  templateUrl: './developer-layout.component.html',
  styleUrls: ['./developer-layout.component.scss']
})
export class DeveloperLayoutComponent implements OnInit {

/**
   * Stores if left sidenav is open.
   */
  leftSidenavOpen: boolean;

  /**
   * Stores left sidenav display mode.
   */
  leftSidenavMode: string;

  /**
   * Stores media observable subscription.
   */
  mediaSubscription: Subscription;

  getUserState: Observable<any>;

  user = null;

  constructor(
    private media: ObservableMedia,
    public layoutService: LayoutService,
    private store: Store<AppState>
  ) {
    this.getUserState = this.store.select(selectAuthState);
  }

  ngOnInit(): void {
    // Get initial state of the sidenav.
    this.calculateSidenavStatus();

    // Subscribe to changes in screen size to change sidenav behavior.
    this.mediaSubscription = this.media
      .subscribe((change: MediaChange) => this.calculateSidenavStatus());

    this.getUserState.subscribe((state) => this.user = state.user);

    this.store.dispatch(new GetStatus);

  }

  ngOnDestroy(): void {
    this.mediaSubscription.unsubscribe();
    // this.getUserState.unsubscribe();
  }

  calculateSidenavStatus(): void {
    const isMobile = this.media.isActive('lt-md');
    // Close sidenav on mobile.
    this.leftSidenavOpen = !isMobile;
    // Make sidenav open over content on mobile.
    this.leftSidenavMode = isMobile ? 'over' : 'side';
  }

  logOut() {
    this.store.dispatch(new LogOut);
  }

}

