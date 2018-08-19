import { MatSidenav } from '@angular/material';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Logout } from '../../../auth/auth.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../../reducers';

@Component({
  selector: 'app-horizontal-menu',
  templateUrl: './horizontal-menu.component.html',
  styleUrls: ['./horizontal-menu.component.scss']
})
export class HorizontalMenuComponent {
  notificationsChecked: Boolean = false;
  /**
   * Import left sidenav so we can access open close functions.
   */
  @Input() leftSidenav: MatSidenav;

  /**
   * Import right sidenav so we can access open close functions.
   */
  @Input() rightSidenav: MatSidenav;

  /**
   * Makes the toolbar transparent.
   */
  @Input() transparent: Boolean = false;

  @Input() userData: Object = null;

  @Output() logOutFlag = new EventEmitter<boolean>();

  constructor(private store: Store<AppState>) { }

  openRightSidenav(): void {
    this.rightSidenav.open();
    this.notificationsChecked = true;
  }

  showMenuIcon(): boolean {
    return this.leftSidenav && !this.leftSidenav.opened;
  }

  logOut(event) {
    this.store.dispatch(new Logout())
  }
}
