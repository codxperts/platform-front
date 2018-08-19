import { Action } from '@ngrx/store';
import { User } from '../entities/user';
import { AuthActions, AuthActionTypes } from './auth.actions';


export interface AuthState {
  loggedIn: boolean,
  token: string,
  user: User,
  isPending: boolean
}

export const initialState: AuthState = {
  loggedIn: false,
  token: undefined,
  user: undefined,
  isPending: false
};

export function authReducer(state = initialState, action: AuthActions): AuthState {
  switch (action.type) {
    
    case AuthActionTypes.REQUEST_LOGIN:
      return {
        ...state,
        isPending: true
      }

    case AuthActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        token: action.payload,
        isPending: false
      }
    
    case AuthActionTypes.LOGOUT:
      return {
        ...state,
        loggedIn: false,
        token: undefined,
        user: undefined
      }
    
    case AuthActionTypes.USER_DETAILS:
      return {
        ...state
      }
    
    case AuthActionTypes.USER_DETAILS_SUCCESS:
      return {
        ...state,
        user: action.payload.user
      }

    default:
      return state;
  }
}
