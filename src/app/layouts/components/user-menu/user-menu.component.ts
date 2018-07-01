import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../../developer/store/app.states';
import { LogOut } from '../../../developer/store/actions/auth.actions';

@Component({
  selector: 'portal-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {

  @Input() user: Object = null;

  @Output() logOutFlag = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  logOut(): void {
    this.logOutFlag.emit(true);
  }

}
