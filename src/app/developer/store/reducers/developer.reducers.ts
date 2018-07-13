import { Developer } from '../../models/developer';
import { DeveloperActionTypes, All } from '../actions/developer.actions';

export interface State {
  // if authenticated, there should be a user object
  developer: Developer | null;
  // error message
  errorMessage: string | null;
  pending: boolean | false;
  successMessage: string | null;
}

export const initialState: State = {
    developer: null,
    errorMessage: null,
    pending: false,
    successMessage: null
  };

export function reducer(state = initialState, action: All): State {
    console.log(action);
    switch (action.type) {
        case DeveloperActionTypes.INVITE_TO_FRIEND: {
            return {
              ...state,
              pending: true,
              errorMessage: null,
              successMessage: null,
            };
        }
        case DeveloperActionTypes.INVITE_TO_FRIEND_SUCCESS: {
            return {
              ...state,
              pending: false,
              errorMessage: null,
              successMessage: action.payload.message
            };
        }
        case DeveloperActionTypes.INVITE_TO_FRIEND_FAILURE: {
            return {
                ...state,
                pending: false,
                errorMessage: action.payload.error,
                successMessage: null,
            };
        }
        default: {
            return state;
        }
    }
}