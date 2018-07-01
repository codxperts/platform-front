import { MatSidenav } from '@angular/material';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-developer-horizontal-menu',
  templateUrl: './developer-horizontal-menu.component.html',
  styleUrls: ['./developer-horizontal-menu.component.scss']
})
export class DeveloperHorizontalMenuComponent {
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

  constructor() { }

  openRightSidenav(): void {
    this.rightSidenav.open();
    this.notificationsChecked = true;
  }

  showMenuIcon(): boolean {
    return this.leftSidenav && !this.leftSidenav.opened;
  }

  logOut(event) {
    this.logOutFlag.emit(event);
  }
}
