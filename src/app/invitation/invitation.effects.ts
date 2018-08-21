import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { mergeMap, map, switchMap, tap } from 'rxjs/operators';
import {
  RequestInvitations,
  InvitationActionTypes,
  InvitationsLoaded,
  InviteToFriend,
  InviteToFriendSuccess,
  InviteToFriendFailure
} from './invitation.actions';
import { InvitationService } from './invitation.service';
import { Observable } from 'rxjs/Observable';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class InvitationEffects {
  @Effect()
  loadProduct$ = this.actions$.pipe(
    ofType<RequestInvitations>(InvitationActionTypes.REQUEST_INVITATIONS),
    mergeMap(action =>
      this.invitationService.paginate(
        action.payload.page + 1,
        action.payload.pageSize
      )
    ),
    map(result => {
      return new InvitationsLoaded({
        invitations: result.data,
        page: {
          totalElements: result.meta.total,
          totalPages: result.meta.last_page,
          number: +result.meta.current_page - 1,
          size: result.meta.per_page
        }
      });
    })
  );

  @Effect()
  invite$ = this.actions$.pipe(
    ofType(InvitationActionTypes.INVITE_TO_FRIEND),
    map((action: InviteToFriend) => action.payload),
    switchMap(payload => {
      return this.invitationService
        .inviteToFriend(payload.email, payload.user)
        .map(response => {
          return new InviteToFriendSuccess(response);
        })
        .catch(error => {
          return Observable.of(new InviteToFriendFailure(error));
        });
    })
  );

  constructor(
    private actions$: Actions,
    private invitationService: InvitationService,
    private toastr: ToastrService
  ) {}
}
