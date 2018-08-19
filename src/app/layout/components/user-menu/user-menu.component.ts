import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { User } from '../../../entities/user';

@Component({
  selector: 'user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {

  @Input() user: User = null;

  @Output() logOutFlag = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  logOut(): void {
    this.logOutFlag.emit(true);
  }

}
