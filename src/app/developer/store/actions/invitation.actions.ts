import { Action } from '@ngrx/store';
import { Invitation } from '../../models/invitation';
import { Page } from '../../models/page';

export enum InvitationActionTypes {
  INVITE_TO_FRIEND = '[Invitation] Invite to friend',
  INVITE_TO_FRIEND_SUCCESS = '[Invitation] Invite to friend success',
  INVITE_TO_FRIEND_FAILURE = '[Invitation] Invite to friend failure',
  SEARCH_INVITATIONS = '[Invitation] Search',
  SET_INVITATIONS = '[Invitation] Set',
  SEARCH_INVITATIONS_SUCCESS = '[Invitation] Search success',
  SEARCH_INVITATIONS_FAILURE = '[Invitation] Search failure'
}

export class InviteToFriend implements Action {
  readonly type = InvitationActionTypes.INVITE_TO_FRIEND;
  constructor(public payload: any) {}
}

export class InviteToFriendSuccess implements Action {
  readonly type = InvitationActionTypes.INVITE_TO_FRIEND_SUCCESS;
  constructor(public payload: any) {}
}

export class InviteToFriendFailure implements Action {
  readonly type = InvitationActionTypes.INVITE_TO_FRIEND_FAILURE;
  constructor(public payload: any) {}
}

export class SearchInvitations implements Action {
  readonly type = InvitationActionTypes.SEARCH_INVITATIONS;
  constructor(public payload: any) {}
}

export class SetInvitations implements Action {
  readonly type = InvitationActionTypes.SET_INVITATIONS;
  payload: Readonly<{ invitations: Array<Invitation>; page: Page }>;

  public constructor(
    private invitations: Array<Invitation>,
    private page: Page
  ) {
    this.payload = { invitations, page };
  }
}

export class SearchInvitationsSuccess implements Action {
  readonly type = InvitationActionTypes.SEARCH_INVITATIONS_SUCCESS;
  constructor(public payload: any) {}
}

export class SearchInvitationsFailure implements Action {
  readonly type = InvitationActionTypes.SEARCH_INVITATIONS_FAILURE;
  constructor(public payload: any) {}
}

export type All =
  | InviteToFriend
  | InviteToFriendSuccess
  | InviteToFriendFailure
  | SearchInvitations
  | SearchInvitationsSuccess
  | SearchInvitationsFailure
  | SetInvitations;
