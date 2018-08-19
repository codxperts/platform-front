import { Action } from '@ngrx/store';

export enum InvitationActionTypes {
  REQUEST_INVITATIONS = '[Invitation] Request Invitations',
  INVITATIONS_LOADED = '[Invitation] Invitations loaded'
}

export class RequestInvitations implements Action {
  readonly type = InvitationActionTypes.REQUEST_INVITATIONS;

  constructor(public payload:any) {

  }
}

export class InvitationsLoaded implements Action {
  readonly type = InvitationActionTypes.INVITATIONS_LOADED;
  
  constructor(public payload:any) {

  }
}

export type InvitationActions = InvitationsLoaded | InvitationsLoaded ;
