import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../reducers';
import { UserDetails } from '../auth/auth.actions';
import { user } from '../auth/auth.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  user$: Observable<object>;

  constructor(private store: Store<AppState>) { 
    this.store.dispatch(new UserDetails());
  }

  ngOnInit() {
    

    this.user$ = this.store.pipe(select(user));
  }

}
