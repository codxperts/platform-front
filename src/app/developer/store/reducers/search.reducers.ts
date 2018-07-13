import { Developer } from '../../models/developer';
import { Invitation } from '../../models/invitation';
import { Page } from '../../models/page';
import { SearchActionTypes, All } from '../actions/search.actions';

export interface SearchState {
    page: Page;
    invitations: Array<Invitation>;
}

const initialState: SearchState = {
    invitations: [],
    page: {} as Page
  };

export function searchReducer(state = initialState, action: All): SearchState {
    switch (action.type) {
        case SearchActionTypes.SET_SEARCH_MOVIES:
            return {
                invitations: [ ...action.payload.invitations ],
                page: { ...action.payload.page }
            };
        default: {
            return state;
        }
    }
}