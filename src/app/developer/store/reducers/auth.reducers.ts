import { User } from '../../models/user';
import { AuthActionTypes, All } from '../actions/auth.actions';

export interface State {
  // is a user authenticated?
  isAuthenticated: boolean;
  // if authenticated, there should be a user object
  user: User | null;
  // error message
  errorMessage: string | null;
}

export const initialState: State = {
    isAuthenticated: false,
    user: null,
    errorMessage: null,
  };

  export function reducer(state = initialState, action: All): State {
    console.log(action);
    switch (action.type) {
      case AuthActionTypes.LOGIN_SUCCESS: {
        return {
          ...state,
          isAuthenticated: true,
          user: {
            token: action.payload.token,
            email: action.payload.email
          },
          errorMessage: null
        };
      }
      case AuthActionTypes.LOGIN_FAILURE: {
        return {
          ...state,
          errorMessage: 'Incorrect email and/or password.'
        };
      }
      case AuthActionTypes.LOGOUT: {
        return initialState;
      }
      case AuthActionTypes.STATUS_SUCCESS: {
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload,
          errorMessage: null
        };
      }
      default: {
        return state;
      }
    }
  }