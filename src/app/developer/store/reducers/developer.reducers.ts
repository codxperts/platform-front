import { Developer } from '../../models/developer';
import { DeveloperActionTypes, All } from '../actions/developer.actions';

export interface State {
  // if authenticated, there should be a user object
  developer: Developer | null;
  // error message
  errorMessage: string | null;
}

export const initialState: State = {
    developer: null,
    errorMessage: null,
  };

export function reducer(state = initialState, action: All): State {
    console.log(action);
    switch (action.type) {
        default: {
        return state;
        }
    }
}