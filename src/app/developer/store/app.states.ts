import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as auth from './reducers/auth.reducers';
import * as developer from './reducers/developer.reducers';
import { SearchState, searchReducer } from './reducers/search.reducers';
import {
  invitationReducer,
  InvitationState
} from './reducers/invitation.reducers';

export interface AppState {
  authState: auth.State;
  developerState: developer.State;
  search: SearchState;
  Invitation: InvitationState;
}

export const reducers = {
  auth: auth.reducer,
  developer: developer.reducer,
  search: searchReducer,
  invitation: invitationReducer
};

// export const effects = {
//   auth: auth.reducer,
//   developer: developer.reducer,
//   search: searchReducer,
//   invitation: invitationReducer
// };

export const selectAuthState = createFeatureSelector<AppState>('auth');

export const selectDeveloperState = createFeatureSelector<AppState>(
  'developer'
);

export const getInvitationsState = createFeatureSelector<InvitationState>('invitation'); 

export const getInvitations = createSelector(
  getInvitationsState,
  (state: InvitationState) => state.invitations
);
export const getInvitationsPage = createSelector(
  getInvitationsState,
  (state: InvitationState) => state.page
);
