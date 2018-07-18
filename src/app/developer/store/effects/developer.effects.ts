import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import { tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

import { DeveloperService } from '../../services/developer.service';
import {
  InviteToFriend,
  DeveloperActionTypes,
  InviteToFriendSuccess,
  InviteToFriendFailure
} from '../actions/developer.actions';

@Injectable()
export class DeveloperEffects {
  constructor(
    private actions: Actions,
    private developerService: DeveloperService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  // effects go here
  @Effect()
  InviteToFriend: Observable<any> = this.actions
    .ofType(DeveloperActionTypes.INVITE_TO_FRIEND)
    .map((action: InviteToFriend) => action.payload)
    .switchMap(payload => {
      console.log('eff');
      return this.developerService
        .InviteToFriend(payload.email, payload.user)
        .map(response => {
          return new InviteToFriendSuccess(response);
        })
        .catch(error => {
          return Observable.of(new InviteToFriendFailure(error));
        });
    });

  @Effect({ dispatch: false })
  InviteToFriendSuccess: Observable<any> = this.actions.pipe(
    ofType(DeveloperActionTypes.INVITE_TO_FRIEND_SUCCESS),
    tap(response => {
      console.log(response);
    })
  );

  @Effect({ dispatch: false })
  InviteToFriendFailure: Observable<any> = this.actions.pipe(
    ofType(DeveloperActionTypes.INVITE_TO_FRIEND_FAILURE),
    tap(response => {
      console.log(response);
    })
  );
}
