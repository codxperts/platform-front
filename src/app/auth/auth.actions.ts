import { Action } from '@ngrx/store';
import { User } from '../entities/user';

export enum AuthActionTypes {
  REQUEST_LOGIN = '[Auth User] Request login',
  LOGIN_SUCCESS = '[Auth User] Login Success Action',
  LOGOUT = '[Auth User] Logout Action',
  
  USER_DETAILS = '[Auth User] Details Action',
  USER_DETAILS_SUCCESS = '[Auth User] Success'
}


export class RequestLogin implements Action {

  readonly type = AuthActionTypes.REQUEST_LOGIN;

  constructor(public payload: any) {

  }
}

export class LoginSuccess implements Action {

  readonly type = AuthActionTypes.LOGIN_SUCCESS;

  constructor(public payload: any) {
    
  }
}

export class Logout implements Action {

  readonly type = AuthActionTypes.LOGOUT;

}

export class UserDetails implements Action {
  readonly type = AuthActionTypes.USER_DETAILS;

}

export class UserDetailsSuccess implements Action {
  readonly type = AuthActionTypes.USER_DETAILS_SUCCESS;
  constructor(public payload: { user: User }) {

  }
}

export type AuthActions = RequestLogin 
| LoginSuccess 
| Logout 
| UserDetails 
| UserDetailsSuccess;
