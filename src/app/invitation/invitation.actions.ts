import { Action } from '@ngrx/store';
import { Page } from '../shared/pagination/entities/page.entity';

export enum InvitationActionTypes {
  REQUEST_INVITATIONS = '[Invitation] Request Invitations',
  INVITATIONS_LOADED = '[Invitation] Invitations loaded',

  INVITE_TO_FRIEND = '[Invitation] Invite to friend',
  INVITE_TO_FRIEND_SUCCESS = '[Invitation] Invite to friend success',
  INVITE_TO_FRIEND_FAILURE = '[Invitation] Invite to friend failure',

  CLEAR_MESSAGES = '[Invitation] clear server messages'
}

export class RequestInvitations implements Action {
  readonly type = InvitationActionTypes.REQUEST_INVITATIONS;

  constructor(public payload: { page: number; pageSize: number }) {}
}

export class InvitationsLoaded implements Action {
  readonly type = InvitationActionTypes.INVITATIONS_LOADED;

  constructor(public payload: any) {}
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

export class clearMessages implements Action {
  readonly type = InvitationActionTypes.CLEAR_MESSAGES;
}

export type InvitationActions =
  | InvitationsLoaded
  | RequestInvitations
  | InviteToFriend
  | InviteToFriendSuccess
  | InviteToFriendFailure
  | clearMessages;
