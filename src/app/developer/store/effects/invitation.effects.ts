import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import { tap } from 'rxjs/operators';

import { InvitationService } from '../../services/invitation.service';
import {
  InviteToFriend,
  InvitationActionTypes,
  InviteToFriendSuccess,
  InviteToFriendFailure,
  SetInvitations,
  SearchInvitations,
  SearchInvitationsFailure,
  SearchInvitationsSuccess
} from '../actions/invitation.actions';
import { Page } from '../../../shared/pagination/pagination-page';

@Injectable()
export class InvitationEffects {
  constructor(
    private actions: Actions,
    private invitationService: InvitationService // private store: Storage
  ) {}

  // effects go here
  @Effect()
  public InviteToFriend: Observable<any> = this.actions
    .ofType(InvitationActionTypes.INVITE_TO_FRIEND)
    .map((action: InviteToFriend) => action.payload)
    .switchMap(payload => {
      return this.invitationService
        .InviteToFriend(payload.email, payload.user)
        .map(response => {
          return new InviteToFriendSuccess(response);
        })
        .catch(error => {
          return Observable.of(new InviteToFriendFailure(error));
        });
    });

  @Effect({ dispatch: false })
  public InviteToFriendSuccess: Observable<any> = this.actions.pipe(
    ofType(InvitationActionTypes.INVITE_TO_FRIEND_SUCCESS),
    tap(response => {
      console.log(response);
    })
  );

  @Effect({ dispatch: false })
  public InviteToFriendFailure: Observable<any> = this.actions.pipe(
    ofType(InvitationActionTypes.INVITE_TO_FRIEND_FAILURE),
    tap(response => {
      console.log(response);
    })
  );

  @Effect()
  public SearchInvitations: Observable<any> = this.actions
    .ofType(InvitationActionTypes.SEARCH_INVITATIONS)
    .map((action: SearchInvitations) => action.payload)
    .switchMap(payload => {
      return this.invitationService
        .searchForMovie(payload.search, payload.page)
        .map(response => {
          return new SetInvitations(response.invitations, response.page);
          // return new SearchInvitationsSuccess(response);
        })
        .catch(error => {
          return Observable.of(new SearchInvitationsFailure(error));
        });
    });
  // SearchInvitations: Observable<any> = this.actions
  //   .ofType(InvitationActionTypes.SEARCH_INVITATIONS)
  //   .switchMap(page => this.invitationService.searchForMovie('james bond', 1))
  //   .do(response => {
  //     console.log(response);
  //     // new SetInvitations(response.invitations, response.page);
  //   })
  //   .map(result => result.invitations);
  // //.merge(this.store.select(state => state.search.invitations));

  @Effect({ dispatch: false })
  public SearchInvitationsSuccess: Observable<any> = this.actions.pipe(
    ofType(InvitationActionTypes.SEARCH_INVITATIONS_SUCCESS),
    tap(response => {
      return new SetInvitations(response.invitations, response.page);
      // console.info(response);
    })
  );

  @Effect({ dispatch: false })
  public SearchInvitationsFailure: Observable<any> = this.actions.pipe(
    ofType(InvitationActionTypes.SEARCH_INVITATIONS_FAILURE),
    tap(response => {
      console.log(response);
    })
  );
}
