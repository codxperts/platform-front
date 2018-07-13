import { Action } from '@ngrx/store';


export enum DeveloperActionTypes {
    MY_PROFILE = '[Developer] me',
    INVITE_TO_FRIEND = '[Developer] Invite to friend',
    INVITE_TO_FRIEND_SUCCESS = '[Developer] Invite to friend success',
    INVITE_TO_FRIEND_FAILURE = '[Developer] Invite to friend failure'
}

export class MyProfile implements Action {
  readonly type = DeveloperActionTypes.MY_PROFILE;
  constructor(public payload: any) {}
}

export class InviteToFriend implements Action {
  readonly type = DeveloperActionTypes.INVITE_TO_FRIEND;
  constructor(public payload: any) {
  }
}

export class InviteToFriendSuccess implements Action {
  readonly type = DeveloperActionTypes.INVITE_TO_FRIEND_SUCCESS;
  constructor(public payload: any) {console.log(payload);}
}

export class InviteToFriendFailure implements Action {
  readonly type = DeveloperActionTypes.INVITE_TO_FRIEND_FAILURE;
  constructor(public payload: any) {}
}

export type All =
  | MyProfile
  | InviteToFriend
  | InviteToFriendSuccess
  | InviteToFriendFailure;