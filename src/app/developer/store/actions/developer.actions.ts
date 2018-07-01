import { Action } from '@ngrx/store';


export enum DeveloperActionTypes {
    MY_PROFILE = '[Profile] me'
}

export class myProfile implements Action {
  readonly type = DeveloperActionTypes.MY_PROFILE;
  constructor(public payload: any) {}
}

export type All =
  | myProfile;